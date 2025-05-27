import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="md:pt-16 mt-24 md:mt-16 relative"
      id="hero"
      aria-labelledby="hero-title"
    >
      {/* Contenedor con imagen de fondo y contenido */}
      <div className="w-[90%] mx-auto px-10 py-12 md:py-36 relative overflow-hidden ">
        {/* Imagen de fondo interna */}
        <Image
          src="/home.webp"
          alt="Fondo de salas de capacitación y auditorios"
          fill
          className="object-cover -z-10"
          priority
          sizes="100vw"
        />

        <div className="text-white relative z-10">
          <h1
            className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight"
            id="hero-title"
          >
            Reserva salas de
            <br />
            capacitación y auditorios
          </h1>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#943315] hover:bg-orange-800 text-white px-8 py-2 rounded cursor-pointer">
              Reservar
            </button>
            <button className="border border-orange-700 text-[#943315] bg-white px-8 py-2 rounded hover:bg-orange-100 cursor-pointer">
              Cotizar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
