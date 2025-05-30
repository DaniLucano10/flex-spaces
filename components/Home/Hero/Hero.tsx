"use client";

import Modal from "@/components/common/Modal";
import ReservationForm from "@/components/common/ReservationForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="pt-16 pb-4 mt-4 relative"
      id="hero"
      aria-labelledby="hero-title"
    >
      {/* Contenedor con imagen de fondo y contenido */}
      <div className="w-[90%] mx-auto px-10 py-12 md:py-36 relative overflow-hidden min-h-[400px] md:min-h-[300px]">
        {/* Imagen de fondo interna */}
        <Image
          src="/images/home/espacios-flex-Banner-home.jpg"
          alt="Fondo de salas de capacitación y auditorios"
          fill
          className="object-cover -z-10"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 md:relative md:items-start md:justify-start md:text-left">
          <h1
            className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight"
            id="hero-title"
          >
            Reserva salas de
            <br />
            capacitación y auditorios
          </h1>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button
              className="bg-[#943315] font-bold hover:bg-orange-900 text-white px-8 py-1 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Reservar
            </button>
            <Link
              href="https://wa.me/51954101100"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8"
            >
              <button className="border border-[#ED8430] font-bold text-white px-8 py-1 cursor-pointer">
                Cotizar
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contacta Un Asesor Comercial"
        size="xl"
      >
        <ReservationForm />
      </Modal>
    </section>
  );
};

export default Hero;
