import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import { ProductModel } from "@/lib/models/ProductsModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectToDatabase();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const product = await ProductModel.findById(id);
        if (!product)
          return res.status(404).json({ error: "Product not found" });
        return res.status(200).json(product);
      } catch (error) {
        return res.status(500).json({ error: "Failed to fetch product" });
      }

    case "PUT":
      try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
          id,
          { ...req.body },
          { new: true, runValidators: true }, // returns the modified document rather than original
        );
        if (!updatedProduct)
          return res.status(404).json({ error: "Product not found" });
        return res.status(200).json({ success: true, data: updatedProduct });
      } catch (error) {
        return res.status(500).json({ error: "Failed to update product" });
      }

    case "DELETE":
      try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct)
          return res.status(404).json({ error: "Product not found" });
        return res
          .status(200)
          .json({ success: true, message: "Product deleted successfully" });
      } catch (error) {
        return res.status(500).json({ error: "Failed to delete product" });
      }

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
