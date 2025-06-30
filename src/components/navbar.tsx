'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          KMZ Converter
        </Link>
        <div>
          <Link href="/account" className="text-gray-300 hover:text-white px-3">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}