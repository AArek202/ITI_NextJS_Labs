import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { IProduct } from "@/lib/models/ProductsModel";

// Load environment variables manually for standalone script running
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

const SeedSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating: Number,
  description: String,
  thumbnail: String,
  category: String,
});

const SeedProduct =
  mongoose.models.Product || mongoose.model("Product", SeedSchema);

async function seedDatabase() {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is missing from .env.local");
    process.exit(1);
  }

  try {
    console.log("⏳ Connecting to MongoDB Atlas...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected successfully.");

    console.log("⏳ Fetching products from DummyJSON...");
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (!data.products || data.products.length === 0) {
      throw new Error("No products found from API.");
    }

    // Clean data format to match model expectations
    type ProductSummary = Pick<
      IProduct,
      "title" | "price" | "rating" | "description" | "thumbnail" | "category"
    >;
    const formattedProducts: ProductSummary[] = data.products.map(
      (p: IProduct) => ({
        title: p.title,
        price: p.price,
        rating: p.rating,
        description: p.description,
        thumbnail: p.thumbnail,
        category: p.category,
      }),
    );

    console.log("🧹 Clearing old products from your database...");
    await SeedProduct.deleteMany({});

    console.log(
      `🌱 Seeding ${formattedProducts.length} products into the database...`,
    );
    await SeedProduct.insertMany(formattedProducts);

    console.log("🎉 Database seeded perfectly!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB.");
    process.exit(0);
  }
}

seedDatabase();
