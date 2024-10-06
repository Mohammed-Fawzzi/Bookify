import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="bg-[url('/bg.webp')] min-h-screen bg-cover my-10">
      <div className="flex justify-center items-center py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 px-4 md:px-0 w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-5 md:space-y-6 py-8 sm:py-2">
            <p className="text-lg md:text-xl font-bold text-slate-600">
              <span className="text-sky-600">-</span> Sale Up To 25% Off
            </p>
            <h1 className="font-bold text-4xl sm:text-2xl md:text-5xl text-slate-900">
              Peak 30 Books To Make It A Great Year
            </h1>
            <div className="flex justify-center md:justify-start">
              <button className="my-2 py-2 px-4 md:py-3 md:px-6 bg-sky-600 text-white border border-sky-600 hover:bg-sky-700 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/home.webp"
              alt="slider"
              width={600}
              height={300}
              className="my-6"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
