import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className="bg-[#DCE7ED] flex items-center justify-center">
      <div className="w-screen h-[100vh] flex flex-col items-center justify-center">
        <Image src={"/logo.webp"} width={200} height={200} alt="loading logo" />
        <div className="flex items-center font-sans mb-3 lg:mb-0">
          <p className="text-2xl font-bold ms-1 text-sky-600">Bookify</p>
          <span className="text-3xl font-bold text-slate-900">.</span>
        </div>
      </div>
    </section>
  );
};

export default Loading;
