"use client"; //? Client-side rendering

//? NEXT BUILT-IN
import Link from "next/link";
import Image from "next/image";
//? REACT BUILT-IN
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [logoSize, setLogoSize] = useState<number>(120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const newSize = Math.max(120, 240 - window.scrollY / 5);
        setLogoSize(newSize);
      } else {
        setLogoSize(120);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 backdrop-blur bg-white/30 shadow-md transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-700 text-sm px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            Made w/ Next.js v15
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="#" className="hover:underline">
            FAQs
          </Link>
          <span className="h-4 border-l border-gray-400" />
          <Link href="#" className="hover:underline">
            <span className="flex items-center gap-1">
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="flex flex-col py-2 px-4">
        {/* Logo Row */}
        <div className="flex items-center justify-between w-full relative">
          {/* Mobile Logo */}
          <Link href="/" aria-label="Homepage" className="block lg:hidden">
            <Image
              src="/next.svg"
              alt="Company Logo"
              width={logoSize}
              height={logoSize / 3}
              priority
              className="transition-all duration-300"
            />
          </Link>
          {/* Desktop Logo with Padding */}
          <Link href="/" aria-label="Homepage" className="hidden lg:block mx-auto py-2">
            <Image
              src="/next.svg"
              alt="Company Logo"
              width={logoSize}
              height={logoSize / 3}
              priority
              className="transition-all duration-300"
            />
          </Link>
          {/* Mobile Toggle Button */}
          <button
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          >
            <div className="w-6 h-[2px] bg-black absolute transition-transform duration-300 ease-in-out"
              style={{
                transform: isMenuOpen ? "rotate(45deg) translateY(0px)" : "translateY(-6px)"
              }}
            />
            <div className={`w-6 h-[2px] bg-black absolute transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <div className="w-6 h-[2px] bg-black absolute transition-transform duration-300 ease-in-out"
              style={{
                transform: isMenuOpen ? "rotate(-45deg) translateY(0px)" : "translateY(6px)"
              }}
            />
          </button>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-sm justify-center mt-3">
          {["Home", "Blogs", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group transition-colors duration-200"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full origin-left"></span>
            </Link>
          ))}
        </nav>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden w-full transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 text-sm mt-2">
            {["Home", "Blogs", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="py-2 px-2 border-b hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
