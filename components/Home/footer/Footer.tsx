import Logo from "@/components/logo/Logo";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 pb-16 bg-black">
      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
        {/* 1st part */}
        <div>
          <Link
            href="/"
            className=" cursor-pointer"
            aria-label="Inicio"
          >
            <Logo />
          </Link>
          <p className="mt-4 text-gray-200 font-medium">
            Síguenos en nuestras redes:
          </p>
          <div className="mt-6 flex items-center space-x-2">
            <a
              href="https://facebook.com/tuempresa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/tuempresa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-8 h-8 bg-pink-500 text-white rounded-full"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 2nd part */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Nuestros Servicios</h2>
          <a
            href="/servicios/auditorio"
            className="text-sm text-white hover:underline block"
          >
            Alquiler de auditorios
          </a>
          <a
            href="/servicios/sala-capacitacion"
            className="text-sm text-white hover:underline block"
          >
            Alquiler de sala de capacitación
          </a>
          <a
            href="/servicios/laboratorio"
            className="text-sm text-white hover:underline block"
          >
            Alquiler de laboratorio equipado
          </a>
          <a
            href="/servicios/eventos"
            className="text-sm text-white hover:underline block"
          >
            Alquiler de sala de eventos corporativos
          </a>
        </div>

        {/* 3rd part */}
        <div>
          <h2 className="text-lg font-bold text-white">
            Información de contacto
          </h2>

          <div className="mt-4 flex flex-row items-center gap-3">
            <span className="text-sm text-white">Teléfono:</span>
            <a
              href="https://wa.me/51954101100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chatear por WhatsApp"
              title="Chatear por WhatsApp"
              className="text-sm text-white hover:text-green-400 no-underline"
            >
              +51 954 101 100
            </a>
          </div>

          <div className="mt-4 flex flex-row items-center gap-3">
            <span className="text-sm text-white">Correo:</span>
            <a
              href="mailto:info@itsystems.pe"
              aria-label="Enviar correo"
              title="Enviar correo"
              className="text-sm text-white hover:text-blue-400 no-underline"
            >
              info@itsystems.pe
            </a>
          </div>

          <div className="mt-4 flex flex-row items-start gap-3">
            <span className="text-sm text-white">Dirección:</span>
            <span className="text-sm text-white">
              Av. Petit Thouars N° 1775 – Oficina 1303 / Piso 13, Lince.
            </span>
          </div>

          <div className="mt-2">
            <p className="text-sm text-white">
              Edificio Empresarial «El Almirante»
            </p>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="mt-8 w-[80%] mx-auto border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-center text-white md:text-left">
          ©2025 Especios Flex, todos los derechos reservados.
        </p>
        <div className="flex items-center text-white space-x-4 mt-4 md:mt-0">
          <span>Social:</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
