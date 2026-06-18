// pages/quotes.tsx
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import NavbarLayout from "../components/NavbarLayout";
import { Quote } from "../types";
import { useToast } from "@/context/ToastContext";

export default function QuotesPage({ initialQuote }: { initialQuote: Quote }) {
  const [currentQuote, setCurrentQuote] = useState<Quote>(initialQuote);
  const { addToast } = useToast();

  const fetchNewQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setCurrentQuote(data);
      addToast(
        `New quote loaded: &ldquo;${data.quote.substring(0, 25)}...&rdquo;`,
      );
    } catch (err) {
      console.error("Failed to fetch fresh quotes", err);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchNewQuote();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-6 relative min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-6">SSR Real-time Quotes Feed</h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded shadow-md max-w-xl">
        <p className="text-lg italic text-gray-800">
          &ldquo;{currentQuote.quote}&rdquo;
        </p>
        <span className="block text-right text-gray-600 font-semibold mt-2">
          — {currentQuote.author}
        </span>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/quotes/random");
  const initialQuote = await res.json();
  return { props: { initialQuote } };
};

QuotesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <NavbarLayout>{page}</NavbarLayout>;
};
