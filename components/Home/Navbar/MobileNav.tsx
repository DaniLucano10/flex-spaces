import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav
    ? 'translate-y-0 opacity-100'
    : '-translate-y-8 opacity-0 pointer-events-none';

  return (
    <div className="fixed top-[8vh] left-0 z-[1050] w-full sm:w-[60%] bg-[#943315] text-white transition-all transform duration-500 ease-in-out">
      <div
        className={`p-8 transition-all duration-500 ease-in-out ${navOpen}`}
      >
        <div className="flex flex-col space-y-4">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeNav}
              className="text-xl sm:text-2xl font-semibold px-4 py-2 transition"
            >
              <p className="pb-1 text-center">{link.label}</p>
            </Link>
          ))}

          {/* WhatsApp */}
          <Link
            href="https://wa.me/51954101100"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNav}
            className="flex items-center justify-center gap-2 bg-black px-4 py-3 transition-all duration-200 text-white font-semibold cursor-pointer"
          >
            <FaWhatsapp className="text-2xl" />
            +51 954 101 100
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
