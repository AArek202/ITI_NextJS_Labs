import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight">
          <Link href="/" className="hover:text-blue-400 transition">
            BookStore App
          </Link>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
