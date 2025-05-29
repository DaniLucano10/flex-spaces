"use client";

import Image from "next/image";
import Link from "next/link";

const Service = () => {
    return (
        <section className="w-[85%] mx-auto md:mt-4">
            <div className="space-y-12 py-12 bg-white">
                {/* Auditorío */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10">
                    {/* Título solo en móvil */}
                    <h2 className="text-2xl font-bold text-[#ED8430] md:hidden">
                        Auditorio
                    </h2>

                    {/* Imagen */}
                    <div className="w-full md:w-1/3">
                        <Image
                            src="/images/servicios/auditorio/auditorio1.png"
                            alt="Auditorio"
                            width={400}
                            height={300}
                            className="w-full h-48 md:h-72 object-content"
                        />
                    </div>

                    {/* Texto */}
                    <div className="w-full md:w-2/3 flex flex-col justify-between h-full md:p-4">
                        {/* Título solo en escritorio */}
                        <h2 className="text-2xl font-bold text-orange-600 hidden md:block">
                            Auditorio
                        </h2>

                        <p className="mt-4 text-lg">
                            Espacios adaptados hasta 40 personas. Con equipo tecnológico para
                            el ponente: Proyector, laptop, pizarra, etc.
                        </p>
                        <p className="mt-1 text-lg">
                            Además contamos con un área común para en coffee break.
                        </p>

                        <div className="w-full flex md:justify-end mt-6">
                            <Link
                                href="/nuestros-servicios/auditorio"
                                className="w-full md:w-auto bg-[#943315] text-white px-8 py-2 hover:bg-orange-800 transition text-center"
                            >
                                Ver más información
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sala de capacitación */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10">
                    {/* Título solo en móvil */}
                    <h2 className="text-2xl font-bold text-[#ED8430] md:hidden">
                        Sala de capacitación
                    </h2>

                    {/* Imagen solo en móvil */}
                    <div className="w-full md:hidden">
                        <Image
                            src="/images/servicios/sala-de-capacitacion/sala-capacitacion-service.png"
                            alt="Sala de capacitación"
                            width={400}
                            height={300}
                            className="w-full h-48 object-content"
                        />
                    </div>

                    {/* Texto + botón */}
                    <div className="w-full md:w-2/3 flex flex-col justify-between h-full md:mt-4">
                        {/* Título solo en escritorio */}
                        <h2 className="text-2xl font-bold text-[#ED8430] hidden md:block">
                            Sala de capacitación
                        </h2>

                        <p className="mt-2 text-lg">
                            Espacios adaptados hasta 40 personas. Con equipo tecnológico para
                            el ponente y los espectadores: Proyector, laptop, pizarra, etc.
                        </p>
                        <p className="mt-1 text-lg">
                            Además contamos con un área común para en coffee break.
                        </p>
                        <div className="w-full flex md:justify-end mt-6">
                            <Link
                                href="/nuestros-servicios/sala-capacitacion"
                                className="w-full md:w-auto bg-[#943315] text-white px-8 py-2 hover:bg-orange-800 transition text-center"
                            >
                                Ver más información
                            </Link>
                        </div>
                    </div>

                    {/* Imagen solo en escritorio */}
                    <div className="w-full md:w-1/3 hidden md:block">
                        <Image
                            src="/images/servicios/sala-de-capacitacion/sala-capacitacion-service.png"
                            alt="Sala de capacitación"
                            width={400}
                            height={300}
                            className="w-full h-48 md:h-72 object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-12 py-12 bg-white">
                {/* Auditorío */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10">
                    {/* Título solo en móvil */}
                    <h2 className="text-2xl font-bold text-[#ED8430] md:hidden">
                        Laboratorio equipado
                    </h2>

                    {/* Imagen */}
                    <div className="w-full md:w-1/3">
                        <Image
                            src="/images/servicios/laboratorios-equipados/servicios-laboratorio-equipado.png"
                            alt="Laboratorio equipado"
                            width={400}
                            height={300}
                            className="w-full h-48 md:h-72 object-cover"
                        />
                    </div>

                    {/* Texto */}
                    <div className="w-full md:w-2/3 flex flex-col justify-between h-full md:p-4">
                        {/* Título solo en escritorio */}
                        <h2 className="text-2xl font-bold text-orange-600 hidden md:block">
                            Laboratorio equipado
                        </h2>

                        <p className="mt-4 text-lg">
                            Espacios adaptados hasta 40 personas. Con equipo tecnológico para
                            el ponente y los espectadores: Proyector, laptop, pizarra, etc. Te
                            brindamos servicio de soporte según se requiera.
                        </p>
                        <p className="mt-1 text-lg">
                            Además contamos con un área común para en coffee break.
                        </p>

                       <div className="w-full flex md:justify-end mt-6">
                            <Link
                                href="/nuestros-servicios/laboratorio"
                                className="w-full md:w-auto bg-[#943315] text-white px-8 py-2 hover:bg-orange-800 transition text-center"
                            >
                                Ver más información
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sala de capacitación */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10">
                    {/* Título solo en móvil */}
                    <h2 className="text-2xl font-bold text-[#ED8430] md:hidden">
                        Sala de eventos corporativos
                    </h2>

                    {/* Imagen solo en móvil */}
                    <div className="w-full md:hidden">
                        <Image
                            src="/images/servicios/sala-de-capacitacion/servicio-sala-eventos-corporativos.png"
                            alt="Sala de capacitación"
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                    </div>

                    {/* Texto + botón */}
                    <div className="w-full md:w-2/3 flex flex-col justify-between h-full md:mt-4">
                        {/* Título solo en escritorio */}
                        <h2 className="text-2xl font-bold text-[#ED8430] hidden md:block">
                            Sala de eventos corporativos
                        </h2>

                        <p className="mt-2 text-lg">
                            Adaptamos nuestros recursos disponibles según tus necesidades
                            empresariales.
                        </p>
                        <p className="mt-1 text-lg">
                            Brindamos servicio de soporte, y los equipos tecnológicos según se
                            requiera.
                        </p>
                       <div className="w-full flex md:justify-end mt-6">
                            <Link
                                href="/nuestros-servicios/eventos"
                                className="w-full md:w-auto bg-[#943315] text-white px-8 py-2 hover:bg-orange-800 transition text-center"
                            >
                                Ver más información
                            </Link>
                        </div>
                    </div>

                    {/* Imagen solo en escritorio */}
                    <div className="w-full md:w-1/3 hidden md:block">
                        <Image
                            src="/images/servicios/sala-de-capacitacion/servicio-sala-eventos-corporativos.png"
                            alt="Sala de capacitación"
                            width={400}
                            height={300}
                            className="w-full h-48 md:h-72 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
