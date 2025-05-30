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
          data-aos="fade-right"
          ata-aos-delay="100"
        />
        <div
          className="absolute inset-0 flex items-center justify-start px-10"
          data-aos="fade-left"
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            ¿Quiénes somos?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
