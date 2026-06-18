import { db } from "@/lib/db";
import Link from "next/link";

export default async function HomePage() {
  const items = await db.item.findMany();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Items List</h1>
      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <Link
              href={`/books/${item.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
