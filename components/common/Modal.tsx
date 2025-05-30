"use client";

import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl"; // Tamaños opcionales
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-xl",
  xl: "max-w-3xl",
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div
        className={`relative w-full ${sizeClasses[size]} bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/50`}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-800 hover:text-red-500"
          aria-label="Cerrar modal"
        >
          <MdClose className="w-6 h-6 cursor-pointer " />
        </button>

        {/* Título */}
        {title && <h2 className="text-xl text-center font-extrabold mb-4 text-[#943315]">{title}</h2>}

        {/* Contenido */}
        <div className="text-black">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
