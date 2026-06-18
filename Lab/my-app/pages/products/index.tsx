import { GetStaticProps } from "next";
import Link from "next/link";
// import { Product } from "../../types/index";
import Image from "next/image";
import { ReactElement, useState } from "react";
import NavbarLayout from "@/components/NavbarLayout";
import { useToast } from "@/context/ToastContext";
import { IProduct } from "@/types";

const PAGE_SIZE = 9;

interface ProductsPageProps {
  products: IProduct[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { addToast } = useToast();

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="p-8 text-gray-500">No products found.</p>;
  }

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const paginated = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginated.map((product) => (
          <Link href={`/products/${product._id.toString()}`} key={product._id.toString()}>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white">
              <Image
                src={product.thumbnail || "/placeholder.png"}
                alt={product.title}
                width={256}
                height={256}
                className="w-64 h-64 object-contain mx-auto"
              />
              <h2 className="font-semibold text-lg line-clamp-1">
                {product.title}
              </h2>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <span className="text-yellow-500 text-sm">
                ★ {product.rating}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded border bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded border transition ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded border bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>

      <p className="text-center text-sm text-gray-400 mt-3">
        Page {currentPage} of {totalPages} · {products.length} products
      </p>
    </div>
  );
}

ProductsPage.getLayout = function getLayout(page: ReactElement) {
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
