import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Querying database using the parsed parameter ID
  const item = await db.item.findUnique({
    where: { id: parseInt(id) },
  });

  // Triggers Next.js 404 / error boundary if database returns null
  if (!item) {
    notFound();
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <p className="text-gray-600 mt-2">ID: {item.id}</p>
      <p className="mt-4">{item.description}</p>
    </div>
  );
}
