import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="pt-16 pb-4 mt-2 relative"
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

        <div className="text-white relative z-10 text-center md:text-left">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
            id="hero-title"
          >
            Reserva salas de
            <br />
            capacitación y auditorios
          </h1>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-[#943315] font-bold hover:bg-orange-800 text-white px-8 py-1 cursor-pointer">
              Reservar
            </button>
            <button className="border border-[#ED8430] font-bold text-white px-8 py-1 cursor-pointer">
              Cotizar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
