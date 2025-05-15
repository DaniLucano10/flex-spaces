"use client";
import { NavLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
        <div className={`transition-all ${navBg ? "bg-blue-900 shadow-md" : "fixed"} duration-200 h-[12vh] z-[100] fixed w-full bg-blue-500`}>
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* LOGO */}
                <div>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="w-36 sm:w-16 md:w-20 lg:w-auto h-auto object-contain cursor-pointer"
                    />
                </div>

                {/* NavLinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => {
                        return (
                            <Link
                                href={link.url}
                                key={link.id}
                                className="text-white text-md hover:text-blue-950 active:text-blue-950 font-semibold transition-all duration-200"
                            >
                                <p>{link.label}</p>
                            </Link>
                        );
                    })}
                </div>
                {/* buttons */}
                <div className="flex items-center space-x-4">
                    {/* ist button create account button */}
                    <a
                        href="#"
                        className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
                    >
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-600 to-blue-500"></span>
                        <span className="h-full w-full insert-0 absolute -mt-2.5 -ml-5.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-700 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-blue-800 from-blue-500"></span>
                        <span className="relative">Contactanos</span>
                    </a>
                    {/* Theme Toggler */}
                    {/* Burger Menu */}
                    <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
