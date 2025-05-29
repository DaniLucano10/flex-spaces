"use client";

import Image from "next/image";

const Commitment = () => {
  return (
    <section className="w-[90%] mx-auto mt-16 text-start">
      <h2 className="text-xl md:text-3xl text-[#ED8430] font-semibold">
        Nuestro compromiso
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        {/* Elemento 1 */}
        <div className="flex flex-col-reverse md:flex-row items-start gap-6 md:gap-0">
          {/* Imagen */}
          <div className="w-full md:w-1/2 h-48 md:h-64 relative">
            <Image
              src="/images/nosotros/Soporte-especios-flex.webp"
              alt="Icono compromiso 1"
              fill
              className="object-contain"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h3 className="text-lg font-extrabold text-black">Soporte TI</h3>
            <p className="text-base mt-4 text-justify">
              Contamos con un equipo de soporte disponible en cualquier momento
              mientras realices uso de nuestros espacios.
            </p>
            <p className="text-base mt-6 text-justify">
              Brindamos garantía de seguridad y mantenimiento de nuestros equipos.
            </p>
          </div>
        </div>

        {/* Elemento 2 */}
        <div className="flex flex-col-reverse md:flex-row items-start gap-6 md:gap-0">
          <div className="w-full md:w-1/2 h-48 md:h-64 relative">
            <Image
              src="/images/nosotros/laptops-espacios-flex.webp"
              alt="Icono compromiso 2"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 ">
            <h3 className="text-lg font-extrabold text-black">
              Recursos Tecnológicos
            </h3>
            <p className="text-base mt-2 text-justify">
              Nos comprometemos a mantener nuestros recursos tecnológicos a la
              vanguardia en la era de la transformación digital.
            </p>
            <p className="text-base mt-6 text-justify">
              Nuestro objetivo es brindar un servicio alineado a la
              transformación empresarial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
