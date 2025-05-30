import Image from "next/image";

const Benefits = () => {
    return (
        <section className="pt-0 md:pt-8 pb-8">
            <div className="w-[90%] md:w-[75%] mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-[#ED8430] mb-6 md:mb-12">
                    Beneficios que ofrecemos
                </h2>

                {/* Beneficio 1 */}
                <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4 md:px-0 text-left mt-1">
                    <div className="space-y-4">
                        <h3 className="text-xl text-center md:text-start font-bold text-black">
                            Equipos Tecnológicos
                        </h3>
                        <p className="text-[#191919] text-base md:text-lg">
                            Brindamos los equipos tecnológicos necesarios para realizar
                            talleres, capacitaciones y conferencias profesionales:
                        </p>
                        <ul className="list-disc pl-6 md:pl-10 text-[#191919] space-y-1">
                            <li>Proyector multimedia y écran</li>
                            <li>Laptops, micrófono y parlantes</li>
                            <li>Internet Wi-Fi de alta velocidad</li>
                        </ul>
                    </div>
                    <Image
                        src="/images/home/laptops-beneficio-1.jpg"
                        alt="Equipos tecnológicos como laptop, proyector y Wi-Fi"
                        width={600}
                        height={400}
                        className="w-full h-30 md:h-54  object-cover"
                        priority
                    />
                </article>

                {/* Beneficio 2 */}
                <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4 md:px-0 text-left mt-12">
                    <div className="space-y-4 order-1 md:order-2">
                        <h3 className="text-xl text-center md:text-start  font-bold text-black">
                            Recursos de oficina
                        </h3>
                        <p className="text-[#191919] text-base md:text-lg">
                            Además, disponemos de los recursos de oficina que requieras para
                            optimizar tu experiencia corporativa o formativa:
                        </p>
                        <ul className="list-disc pl-6 md:pl-10 text-[#191919] space-y-1">
                            <li>Pizarra acrílica</li>
                            <li>Plumones</li>
                            <li>Mota</li>
                        </ul>
                    </div>
                    <Image
                        src="/images/home/oficina-beneficio-2.jpg"
                        alt="Recursos de oficina como pizarra acrílica y plumones"
                        width={600}
                        height={400}
                        className="w-full h-30 md:h-54 object-cover order-2 md:order-1"
                        loading="lazy"
                    />
                </article>


                {/* Beneficio 3 */}
                <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4 md:px-0 text-left mt-12">
                    <div className="space-y-4">
                        <h3 className="text-xl text-center md:text-start font-bold text-black">Comfort</h3>
                        <p className="text-[#191919] text-base md:text-lg">
                            Nuestros espacios cuentan con las comodidades básicas:
                        </p>
                        <ul className="list-disc pl-6 md:pl-10 text-[#191919] space-y-1">
                            <li>Aire acondicionado</li>
                            <li>Servicios higiénicos independientes</li>
                            <li>Carpetas a medida</li>
                        </ul>
                    </div>
                    <Image
                        src="/images/home/Confort-beneficio-3.jpg"
                        alt="Ambiente cómodo con aire acondicionado y carpetas"
                        width={600}
                        height={400}
                        className="w-full h-30 md:h-54 object-cover"
                        loading="lazy"
                    />
                </article>
            </div>
        </section>
    );
};

export default Benefits;
