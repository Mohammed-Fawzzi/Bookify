"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const linkClass = (href) => {
    const isActive = pathname === href;
    return `transition duration-300 hover:text-sky-600 ${
      isActive ? "text-sky-600 font-semibold" : ""
    }`;
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 shadow-xl bg-[#DCE7ED] py-2 px-5 text-slate-900">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center font-sans mb-3 lg:mb-0"
        >
          <Image width={60} height={20} src={"/logo.webp"} alt="Logo" />
          <p className="text-2xl font-bold ms-1 text-sky-600">Bookify</p>
          <span className="text-3xl font-bold text-slate-900">.</span>
        </Link>

        <div className="hidden md:flex items-center">
          <ul className="flex space-x-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-sky-600"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 bg-[#DCE7ED] text-slate-900 shadow-lg p-3">
          <ul className="flex flex-col items-center space-y-2 pb-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
