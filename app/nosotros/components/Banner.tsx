"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto text-center mt-4">
      <div className="relative w-full h-28 md:h-64 overflow-hidden">
        <Image
          src="/images/nosotros/banner-especios-flex-nosotros.webp"
          alt="Imagen representativa de Quiénes somos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-start px-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            ¿Quiénes somos?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
