"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  // Open & close Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 shadow-xl bg-[#DCE7ED] py-2 px-5 text-slate-900">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center font-sans mb-3 lg:mb-0 cursor-pointer">
          <Image width={60} height={20} src={"/logo.webp"} alt="Logo" />
          <p className="text-2xl font-bold ms-1 text-sky-600">Bookify</p>
          <span className="text-3xl font-bold text-slate-900">.</span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-5">
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Page
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Toggle */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-sky-600">
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 bg-[#DCE7ED] text-slate-900 shadow-lg p-3">
          <ul className="flex flex-col items-center space-y-2 pb-4">
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Page
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-sky-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
