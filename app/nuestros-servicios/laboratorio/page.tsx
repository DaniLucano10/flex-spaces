"use client";
import Modal from "@/components/common/Modal";
import ReservationForm from "@/components/common/ReservationForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const galleryImages = [
  {
    src: "/images/servicios/laboratorios-equipados/Laboratorio-galeria-1.webp",
    alt: "Vista frontal del auditorio con sillas y proyector",
  },
  {
    src: "/images/servicios/laboratorios-equipados/Laboratorio-galeria-2.webp",
    alt: "Auditorio con iluminación ambiental y pantalla encendida",
  },
  {
    src: "/images/servicios/laboratorios-equipados/Laboratorio-galeria-3.webp",
    alt: "Vista lateral del auditorio mostrando el equipo tecnológico",
  },
  {
    src: "/images/servicios/laboratorios-equipados/Laboratorio-galeria-4.webp",
    alt: "Área común para coffee break junto al auditorio",
  },
  {
    src: "/images/servicios/laboratorios-equipados/Laboratorio-galeria-5.webp",
    alt: "Pizarra blanca con accesorios en el auditorio",
  },
  {
    src: "/images/servicios/laboratorios-equipados/Laboratorio-galeria-6.webp",
    alt: "Vista general del auditorio en uso durante una presentación",
  },
];

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pb-4 pt-16">
      {/* Banner */}
      <div className="w-[90%] mx-auto text-center mt-4">
        <div className="relative w-full h-28 md:h-64 overflow-hidden">
          <Image
            src="/images/servicios/laboratorios-equipados/servicios-laboratiorio-banner.webp"
            alt="Banner del auditorio con imagen representativa"
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
            <h1 className="text-white text-3xl md:text-5xl font-bold md:text-start">
              Laboratorio Equipado
            </h1>
          </div>
        </div>
      </div>

      {/* Descripción */}
      <div className="w-[85%] mx-auto md:mt-4 text-justify space-y-6 mt-8">
        <p className="text-lg text-[#313131]">
          Espacios adaptados hasta 40 personas. Con equipo tecnológico para el
          ponente: <br />
          Además contamos con un área común para en coffee break
        </p>

        {/* Incluye */}
        <div>
          <h2 className="text-2xl font-extrabold text-black text-center md:text-start mb-2">
            Incluye
          </h2>
          <ul className="list-disc pl-5 text-base text-[#313131] leading-relaxed space-y-1 ml-2">
            <li>Mesas y sillas personales</li>
            <li>Proyector, ecrán</li>
            <li>Micrófono y parlantes</li>
            <li>Laptop para el ponente</li>
            <li>Laptops para participantes</li>
            <li>Pizarra y complementos</li>
            <li>Aire acondicionado</li>
            <li>Espacio para coffee break</li>
            <li>Servicios higiénicos para damas y caballeros</li>
            <li>Aula Zoom para alternativa virtual</li>
            <li>Soporte técnico dedicado</li>
          </ul>
        </div>
      </div>

      {/* Galería */}
      <div className="w-[85%] mx-auto mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-[#943315] text-3xl md:text-4xl font-extrabold text-center md:text-start">
            Galería de fotos
          </h2>
          <div className="flex w-full md:w-auto gap-4 justify-between md:justify-start">
            <button
              className="bg-[#943315] font-bold hover:bg-orange-900 text-white px-8 py-1 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Reservar
            </button>
            <Link
              href="https://wa.me/+51954101100"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8"
            >
              <button className="border border-[#ED8430] font-bold text-[#943315] px-8 py-1 cursor-pointer">
                Cotizar
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mt-2">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] bg-white overflow-hidden "
              tabIndex={0}
              role="group"
              aria-label={img.alt}
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
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

export default Page;
