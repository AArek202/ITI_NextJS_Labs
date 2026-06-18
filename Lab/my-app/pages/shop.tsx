import { useState, useTransition, useMemo, ReactElement } from "react";
import { GetStaticProps } from "next";
import { IProduct } from "../types";
import NavbarLayout from "@/components/NavbarLayout";
import Link from "next/link";

export default function ShopPage({ products }: { products: IProduct[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [deferredSearch, setDeferredSearch] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: "price" | "rate" | "";
    direction: "asc" | "desc";
  }>({
    key: "",
    direction: "asc",
  });

  const [isPending, startTransition] = useTransition();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    // Low priority update handled via useTransition
    startTransition(() => {
      setDeferredSearch(e.target.value);
    });
  };

  // Filter and Sort handled computationally
  const filteredProducts = useMemo(() => {
    // Create a shallow copy just for safety in filtering and to not affect the original data porp
    const result = [...products].filter((p) =>
      p.title.toLowerCase().includes(deferredSearch.toLowerCase()),
    );

    if (sortConfig.key) {
      result.sort((a, b) => {
        let comparison = 0;

        if (sortConfig.key === "price") {
          comparison = a.price - b.price; // Ascending price
        } else if (sortConfig.key === "rate") {
          comparison = a.rating - b.rating; // Ascending rating
        }

        // To not repeat the logic but in reverse, we will check for the sorting condetion and reverse the results
        return sortConfig.direction === "asc" ? comparison : -comparison;
      });
    }

    return result;
  }, [deferredSearch, sortConfig, products]);

  const handleSort = (key: "price" | "rate") => {
    setSortConfig((prev) => {
      // If clicking the same key, toggle direction. Otherwise, set new key to 'asc'
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const clearSort = () => {
    setSortConfig({ key: "", direction: "asc" });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full border p-2 rounded"
          />
          {isPending && (
            <span className="absolute right-3 top-3 text-xs text-blue-500">
              Updating...
            </span>
          )}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => handleSort("price")}
            className={`px-4 py-2 rounded border flex items-center gap-2 transition ${sortConfig.key === "price" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            Sort by Price{" "}
            {sortConfig.key === "price" &&
              (sortConfig.direction === "asc" ? "↑" : "↓")}
          </button>

          <button
            onClick={() => handleSort("rate")}
            className={`px-4 py-2 rounded border flex items-center gap-2 transition ${sortConfig.key === "rate" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            Sort by Rating{" "}
            {sortConfig.key === "rate" &&
              (sortConfig.direction === "asc" ? "↑" : "↓")}
          </button>

          {sortConfig.key && (
            <button
              onClick={clearSort}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Clear Sort
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {filteredProducts.map((p) => (
          <Link href={`/products/${p._id.toString()}`} key={p._id.toString()}>
            <div
              key={p._id.toString()}
              className="border p-4 rounded shadow bg-white"
            >
              <h3 className="font-semibold line-clamp-1">{p.title}</h3>
              <p className="text-green-600 font-bold">${p.price}</p>
              <p className="text-sm text-yellow-500">★ {p.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <NavbarLayout>{page}</NavbarLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    return { props: { products: data.products ?? [] }, revalidate: 10 };
  } catch (err) {
    console.error(err);
    return { props: { products: [] } };
  }
};
