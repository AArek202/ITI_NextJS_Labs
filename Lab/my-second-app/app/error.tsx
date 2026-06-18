"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an analytics or logging service
    console.error("Application Error Bound:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-2">
        Something went wrong!
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        An error occurred during runtime. The global navigation layout has been
        bypassed to handle this clean up.
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
