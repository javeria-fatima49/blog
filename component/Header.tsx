"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-teal-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <h1 className="text-2xl font-bold font-serif">
          Javeria&apos;s Blog
        </h1>
        <nav className="hidden md:flex gap-6 text-2xl font-sans">
          <ul className="flex gap-8">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/post">Blogpost</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="md:hidden !important text-3xl">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            &#9776;
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-center text-2xl font-sans">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/post">Blogpost</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
