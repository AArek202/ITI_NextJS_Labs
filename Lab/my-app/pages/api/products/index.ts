import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import { ProductModel } from "@/lib/models/ProductsModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectToDatabase();

  switch (req.method) {
    case "GET":
      try {
        // Fetch all products from MongoDB Atlas
        const products = await ProductModel.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ products });
      } catch (error) {
        return res.status(500).json({ error: "Failed to fetch products" });
      }

    case "POST":
      try {
        const { title, price, description, category, thumbnail, rating } =
          req.body;

        // Simple server-side validation
        if (!title || !price || !description || !category) {
          return res.status(400).json({ error: "Missing required fields" });
        }

        const newProduct = await ProductModel.create({
          title,
          price: Number(price),
          description,
          category,
          thumbnail: thumbnail || "/placeholder.png",
          rating: Number(rating) || 0,
        });

        return res.status(201).json({ success: true, data: newProduct });
      } catch (error) {
        return res.status(500).json({ error: "Failed to create product" });
      }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
