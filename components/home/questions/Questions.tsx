"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "¿Puedo reservar una sala de reuniones para un día en Espacios Flex?",
    answer:
      "Todas nuestras salas de reuniones están disponibles por horas o por días y noches. Por ello, si necesita alquilar un espacio para reuniones, podemos ayudarle a encontrar la opción que mejor se adapte a sus necesidades en Espacios Flex.",
  },
  {
    question: "¿Cuánto cuesta una sala de reuniones en Espacios Flex?",
    answer:
      "Con nuestra opción premium, alquile una sala de reuniones en Espacios Flex por una cuota que oscila entre los s/ y los s/ por hora. Nuestras salas de reuniones le ofrecen todo lo que necesita para organizar una reunión productiva. Además, se pueden alquilar por horas o por días. Puede usarlas de la manera que mejor se adapte a sus necesidades: como una sala de conferencias, una sala de juntas, una sala de entrevistas o un aula de formación.",
  },
  {
    question: "¿Qué tipo de sala puedo alquilar?",
    answer:
      "Encuentre el espacio ideal para su próximo evento gracias a nuestra dos variedades de salas de reuniones.  Además, todas ellas están equipadas con lo último en tecnología, conexión wifi de alta velocidad y equipos de apoyo en las instalaciones para garantizar que la reunión se desarrolle sin problemas.",
  },
  {
    question: "¿Puedo reservar una sala de reuniones para varios días?",
    answer:
      "Sí, puede reservar una sala de reuniones desde un período mínimo de una hora hasta una semana completa en nuestros centros de negocios en Espacios Flex. Solo tendrá que hacer una reserva en línea, por teléfono o correo eléctronico.",
  },
  {
    question: "¿Es necesario reservar una sala de reuniones en Espacios Flex con antelación?",
    answer:
      "Le recomendamos que reserve su sala de reuniones con antelación para asegurarse de que haya un espacio disponible para usted y sus invitados. Si reserva con antelación, también podrá personalizar la distribución de la sala y contratar servicios de catering o refrescos.",
  },
  {
    question: "¿Qué equipamiento adicional puedo alquilar?",
    answer:
      "Nuestras salas están totalmente equipadas con mobiliario moderno y equipos de videoconferencia, por lo que tan solo tendrá que acudir al centro y ponerse manos a la obra. También podemos gestionar la instalación de pizarras, rotafolios, pantallas audiovisuales y proyectores en su espacio si los necesita, alquiler de laptops para los participantes, entre otros. Solo contáctanos.",
  },
  {
    question: "¿Cuál es el mínimo de tiempo durante el que puedo alquilar una sala de reuniones?",
    answer:
      "Nuestras salas de reuniones están disponibles por horas, lo que le garantiza que solo pagará por el tiempo y el espacio que necesite.",
  },
  {
    question: "¿Puedo ampliar la reserva de mi sala de reuniones?",
    answer:
      "Si su reunión se alarga más de lo esperado, puede ampliar la reserva de la sala por horas en función de la disponibilidad. Póngase en contacto con nuestro equipo en las instalaciones para que podamos comprobar si es posible modificar la reserva para adaptarnos a sus necesidades y a las nuevas circunstancias.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="pt-16 pb-12">
      <div className="w-[85%] mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-[#ED8430] mb-8">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = index === activeIndex;
            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className={`w-full flex items-center gap-3 text-left px-2 sm:px-4 py-3 transition-colors duration-200 ${
                    isOpen ? "text-[#943315]" : "bg-white text-[#444444]"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <FiChevronDown
                    className={`transform transition-transform text-[#943315] duration-400 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                  <span className="text-sm sm:text-base font-medium break-words">
                    {faq.question}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-2 sm:px-4 py-3 text-sm text-left text-[#515151]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
