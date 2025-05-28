import React from "react";

const Map = () => {
  return (
    <section className="pt-16 pb-8" aria-labelledby="map-title">
      <div className="md:w-[70%] mx-auto px-4 text-center">
        <h2
          id="map-title"
          className="text-2xl md:text-3xl font-bold text-[#ED8430] mb-4"
        >
          Encuéntranos En El Mapa
        </h2>

        <address className="not-italic text-center text-sm md:text-base font-medium text-black mb-6">
          Av. Petit Thouars N° 1775 – Oficina 1303 / Piso 13, Lince. <br />
          Edificio Empresarial «El Almirante».
        </address>

        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.0203211817433!2d-77.03741323038344!3d-12.08665301589495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c89d7eb832b1%3A0x17372945fbd7f4a6!2sAv.%20Petit%20Thouars%201775%2C%20Lince%2015073!5e0!3m2!1ses-419!2spe!4v1716900000000!5m2!1ses-419!2spe"
            title="Ubicación en el mapa: Petit Thouars 1775, Lince"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] border-none rounded"
            aria-label="Mapa de ubicación de la oficina"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
