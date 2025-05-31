"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <section className="pt-6 pb-2 mt-8 bg-black" aria-labelledby="social-contact">
      <div className="w-[90%] mx-auto p-8" data-aos="zoom-in">
        <h2
          id="social-contact"
          className="text-white text-xl md:text-3xl font-semibold text-start"
        >
          Nuestros medios de contacto
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {/* Redes sociales */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white">Síguenos en nuestras redes:</p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://facebook.com/tu-pagina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a nuestra página de Facebook"
              >
                <FaFacebook className="text-white hover:text-[#ED8430] text-4xl" />
              </a>
              <a
                href="https://instagram.com/tu-pagina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ir a nuestro Instagram"
              >
                <FaInstagram className="text-white hover:text-[#ED8430] text-4xl" />
              </a>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white">Teléfono:</p>
            <a
              href="tel:+51987654321"
              className="text-white text-base mt-2 hover:underline"
            >
              +51 987654321
            </a>
          </div>

          {/* Correo */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white">Correo:</p>
            <a
              href="mailto:info@example.com"
              className="text-white text-base mt-2 hover:underline"
            >
              info@example.com
            </a>
          </div>

          {/* Dirección */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white">Dirección:</p>
            <address className="text-white text-base mt-2 not-italic text-center md:text-left">
              Av. Petit Thouars N° 1775 – Oficina 1303 / Piso 13, Lince.
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
