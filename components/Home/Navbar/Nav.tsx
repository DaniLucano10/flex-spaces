"use client";
import Isotipo from "@/components/logo/Isotipo";
import Logo from "@/components/logo/Logo";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, []);
    return (
        <div
            className={`transition-all ${navBg ? "bg-black shadow-md" : "fixed"
                } duration-200 h-[12vh] z-[100] fixed w-full bg-black`}
        >
            <div className="flex items-center h-full justify-between w-[90%]  mx-auto">
                {/* LOGO */}
                {/* Logo para desktop */}
                <Link href="/" className="hidden md:block cursor-pointer">
                    <Logo />
                </Link>

                {/* Isotipo para mobile */}
                <Link href="/" className="block md:hidden cursor-pointer">
                    <Isotipo />
                </Link>

                {/* Aquí agrupamos NavLinks + botón en desktop */}
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
                    {/* Botón pegado sin margen extra (o pequeño margen) */}
                    <Link
                        href="https://wa.me/51954101100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-8"
                    >
                        <button className="flex items-center gap-2 bg-[#ED8430] text-white px-4 py-2 rounded-md hover:bg-orange-400 transition-all duration-200">
                            <FaWhatsapp className="text-white text-2xl" />
                            +51 954 101 100
                        </button>
                    </Link>
                </div>

                {/* En mobile: mostrar botón y burger menu */}
                <div className="flex items-center lg:hidden space-x-4">
                    <Link
                        href="https://wa.me/51954101100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-8"
                    >
                        <button className="flex items-center gap-2 bg-[#ED8430] text-white px-4 py-2 rounded-md hover:bg-orange-400 transition-all duration-200">
                            <FaWhatsapp className="text-white text-xl" />
                            +51 954 101 100
                        </button>
                    </Link>
                    <HiBars3BottomRight
                        onClick={openNav}
                        className="w-8 h-8 cursor-pointer text-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;
