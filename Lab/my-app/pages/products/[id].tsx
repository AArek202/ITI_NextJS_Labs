import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { IProduct } from "../../types";
import Image from "next/image";
import { ReactElement } from "react";
import NavbarLayout from "@/components/NavbarLayout";

interface ProductDetailPageProps {
  product: IProduct;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const router = useRouter();

  // Show fallback loading skeleton while page is generating for the first time
  if (router.isFallback)
    return <div className="text-center p-10">Loading product...</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-10 bg-white p-10 rounded-2xl shadow-lg">
        <div className="relative w-full md:w-96 h-96 shrink-0">
          <Image
            src={product.thumbnail || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <span className="text-4xl font-bold text-green-600">
              ${product.price}
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-lg font-medium">
              ★ {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <NavbarLayout>{page}</NavbarLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products?limit=5");
    const data = await res.json();
    const paths = data.products.map((p: IProduct) => ({
      params: { id: p._id.toString() },
    }));
    return { paths, fallback: true };
  } catch {
    return { paths: [], fallback: true }; // fallback:true means ISR still handles all routes
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${params?.id}`);
    const product: IProduct = await res.json();
    return { props: { product }, revalidate: 60 };
  } catch {
    return { notFound: true };
  }
};
