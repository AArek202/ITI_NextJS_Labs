import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  title: string;
  price: number;
  rating: number;
  description: string;
  thumbnail: string;
  category: string;
}

const ProductSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true, default: "/placeholder.png" },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

// Prevent mongoose from compiling the model multiple times during Next.js Hot Reloads -> AI suggestion BTW
export const ProductModel: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
