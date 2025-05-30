"use client";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  image: string;
  alt: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Auditorio",
    image: "/images/home/auditorio-servicio-1.jpg",
    alt: "Auditorio con sillas y proyector",
    link: "/nuestros-servicios/auditorio",
  },
  {
    title: "Sala de capacitación",
    image: "/images/home/Sala-capacitacion-servicio-2.jpg",
    alt: "Sala equipada para capacitación con mesas y sillas",
    link: "/nuestros-servicios/sala-capacitacion",
  },
  {
    title: "Laboratorio equipado",
    image: "/images/home/laboratorio-equpado.jpg",
    alt: "Laboratorio con laptops en escritorios",
    link: "/nuestros-servicios/laboratorio",
  },
  {
    title: "Sala de eventos corporativos",
    image: "/images/home/sala-corporativa-servicio-4.jpg",
    alt: "Sala de eventos con sillas y alfombra roja",
    link: "/nuestros-servicios/eventos",
  },
];

const Services = () => {
  return (
    <section className="pt-16 pb-16">
      <div className="w-[85%] md:w-[75%] mx-auto px-4 text-center">
        <h2 className="text-2xl font-extrabold text-[#ED8430] mb-10">
          Nuestros Principales Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Link href={service.link} key={idx}>
              <div key={idx} className="relative group overflow-hidden">
                {/* Overlay oscuro al hacer hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

                {/* Título superpuesto */}
                <div className="absolute top-0 left-0 w-full h-18 md:h-20 bg-[#943315] group-hover:bg-transparent text-white pt-4 md:pt-4 font-semibold text-lg z-10 transition-all duration-300 text-center">
                  {service.title}
                </div>

                {/* Imagen */}
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={300}
                  height={200}
                  className="w-full h-50 md:h-80 object-cover cursor-pointer z-0"
                  priority
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
