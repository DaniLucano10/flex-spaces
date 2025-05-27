const Hero = () => {
    return (
        <section
            className="md:pt-16 relative bg-blue-600 w-full h-screen flex justify-center flex-col"
            aria-label="Sección principal de bienvenida"
        >
            <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
                <div className="text-sm sm:text-base md:text-xl font-bold text-white">
                    <p>Reserva de salas de capacitación y auditorias</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
