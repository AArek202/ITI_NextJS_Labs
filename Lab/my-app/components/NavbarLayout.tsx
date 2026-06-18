import React from "react";
import Link from "next/link";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link href="/products">Products</Link>
        <Link href="/shop">Shop & Filter</Link>
        <Link href="/quotes">SSR Quotes</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
