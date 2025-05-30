import Logo from "@/components/logo/Logo";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

type Props = {
  openNav: () => void;
  closeNav: () => void;
  showNav: boolean;
};

const Nav = ({ openNav, closeNav, showNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-black shadow-md" : "fixed"
      } duration-200 h-[10vh] md:h-[8vh] z-[40] fixed w-full bg-black`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <Link href="/" className="cursor-pointer" aria-label="Inicio">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center">
          <div className="flex space-x-6">
            {NavLinks.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className="text-white text-md hover:text-orange-500 active:text-orange-500 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
          <Link
            href="https://wa.me/51954101100"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 flex items-center gap-2 bg-[#943315] text-white px-4 py-1 cursor-pointer hover:bg-orange-900 transition-all duration-200"
          >
            <FaWhatsapp className="text-white text-2xl" />
            +51 954 101 100
          </Link>
        </div>

        {/* Mobile nav toggle */}
        <div className="flex items-center lg:hidden space-x-4">
          <Link
            href="https://wa.me/51954101100"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 flex items-center gap-2 bg-[#943315] text-white px-2 py-2 cursor-pointer hover:bg-orange-900 transition-all duration-200"
          >
            <FaWhatsapp className="text-white text-2xl" />
            <span className="sr-only">WhatsApp</span>
          </Link>

          {showNav ? (
            <CgClose
              onClick={closeNav}
              className="w-8 h-8 cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
