"use client";

import Image from "next/image";

const TextWithImage = () => {
  return (
    <section aria-labelledby="about-us" className="mt-6">
      {/* Título oculto para accesibilidad y SEO */}
      <h2 id="about-us" className="sr-only">
        Sobre Espacios Flex
      </h2>

      {/* Título Secundario */}
      <section className="w-[85%] mx-auto mt-6 md:mt-10 text-center md:text-start">
        <h2 className="text-xl md:text-3xl text-[#ED8430] font-semibold">
          Somos más que una plataforma de alquiler de aulas
        </h2>
      </section>

      {/* Contenido principal: texto + imagen */}
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-20 mt-4">
        {/* Texto descriptivo */}
        <article className="md:w-1/2 text-justify text-base md:text-lg leading-relaxed space-y-8 text-[#313131]">
          <p>
            <strong>Espacios Flex</strong> es tu socio estratégico para llevar a
            cabo tus proyectos con éxito. En nuestra plataforma, nos
            especializamos en ofrecer soluciones versátiles y personalizadas
            para satisfacer tus solicitudes.
          </p>
          <p>
            Por otro lado, nuestra amplia oferta de servicios incluye el
            alquiler o la reserva de salas de capacitación para tus reuniones,
            asesorías,{" "}
            <strong>
              seminarios, conferencias, entrevistas, dinámicas de grupo, así
              como actividades sociales y culturales.
            </strong>
          </p>
          <p>
            Entendemos la importancia de la flexibilidad y la innovación en el
            mundo empresarial. Por eso, estamos comprometidos a proporcionarte
            soluciones ágiles y adaptativas que impulsen el éxito de tus
            iniciativas.
          </p>
          <p className="font-bold">
            ¡Únete a nosotros y descubre cómo podemos hacer realidad tus
            proyectos más grandes!
          </p>
        </article>

        {/* Imagen ilustrativa */}
        <div className="md:w-1/2 w-full h-64 md:h-110 relative overflow-hidden">
          <Image
            src="/images/nosotros/Espacios-flex-oficina.webp"
            alt="Ambiente profesional de oficina con aulas modernas y espacios colaborativos"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Banner inferior con texto destacado */}
      <div className="w-[90%] md:w-[70%] mx-auto text-center mt-16 md:mt-20">
        <div className="relative w-full h-28 md:h-56 overflow-hidden">
          <Image
            src="/images/nosotros/Rectangle-84.webp"
            alt="Texto promocional sobre servicios innovadores de Espacios Flex"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center px-10">
            <h1 className="text-white text-xl md:text-5xl font-bold">
              Servicios innovadores que se <br /> adaptan a tus necesidades
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage;
