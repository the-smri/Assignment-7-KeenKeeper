import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-5 text-center px-5">
      <h1 className="text-9xl font-bold text-[#244D3F]">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-gray-500 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="btn bg-[#244D3F] hover:bg-[#1a382e] border-none text-white px-6">
        Return Home
      </Link>
    </div>
  );
}
