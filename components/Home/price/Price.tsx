import { MdSchedule, MdOutlineCalendarToday } from "react-icons/md";

const plans = [
  {
    id: "basico",
    name: "Básico",
    price: "Desde S/. 300.00",
    horario: "Rango día hasta las 6:00 PM",
    sesiones: "3 Horas",
    features: [
      "Mesas y sillas personales",
      "Pizarra acrílica y accesorios",
      "Proyector y Ecran dedicado",
      "Equipo Laptop para capacitor",
      "Internet con Wi-Fi Industrial",
      "Baño de Damas y Caballeros",
      "Area libre compartida para Coffee Break",
      "Micrófono y parlantes",
    ],
    orangeStartIndex: null,
  },
  {
    id: "full",
    name: "Full",
    price: "Desde S/. 400.00",
    horario: "Rango día hasta las 6:00 PM",
    sesiones: "3 Horas",
    features: [
      "Mesas y sillas personales",
      "Pizarra acrílica y accesorios",
      "Proyector y Ecran dedicado",
      "Equipo Laptop para capacitor",
      "Internet con Wi-Fi Industrial",
      "Baño de Damas y Caballeros",
      "Area libre compartida para Coffee Break",
      "Micrófono y parlantes",
      "Zona de Almuerzo dedicado",
      "Aula Zoom para alternativa virtual",
      "Soporte técnico dedicado",
    ],
    orangeStartIndex: 8,
  },
];

const Price = () => (
  <section
    className="pt-16 pb-16 bg-[#FFEADD]"
    aria-labelledby="planes-heading"
  >
    <div className="w-[85%] mx-auto px-4 text-center">
      <h2
        id="planes-heading"
        className="text-2xl md:text-3xl font-bold text-[#943315] mb-10"
      >
        Planes De Cotización
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {plans.map(({ id, name, price, horario, sesiones, features, orangeStartIndex }) => (
          <article
            key={id}
            className="bg-white p-6 rounded-lg w-full max-w-md text-left"
          >
            <header className="flex items-center justify-between">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-[#ED8430]">Plan </span>
                <span className="text-black">{name}</span>
              </h3>
              <p className="text-[#943315] font-bold mb-4">{price}</p>
            </header>
            <div className="border border-[#ED8430] p-4 mb-6 space-y-2">
              <p className="flex items-center text-sm text-[#313131] gap-2">
                <MdSchedule className="text-[#943315]  w-5 h-5" aria-hidden="true" />
                <span>Horario: {horario}</span>
              </p>
              <p className="flex items-center text-sm text-[#313131] gap-2">
                <MdOutlineCalendarToday className="text-[#943315] w-5 h-5" aria-hidden="true" />
                <span>Sesiones: {sesiones}</span>
              </p>
            </div>
            <div>
              {features.map((text, i) => (
                <div key={text} className="flex items-start gap-2 mb-2 pl-4">
                  <div
                    aria-hidden="true"
                    className={`w-3 h-3 mt-1 ${
                      orangeStartIndex !== null && i >= orangeStartIndex
                        ? "bg-[#ED8430]"
                        : "bg-[#943315]"
                    }`}
                  />
                  <p className="text-sm text-[#313131]">{text}</p>
                </div>
              ))}
              <div className="flex justify-center md:justify-end pt-2">
                <button className="bg-[#943315] hover:bg-orange-900 text-white font-bold py-1 px-6">
                  Más información
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Price;
