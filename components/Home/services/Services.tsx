import Image from "next/image";

interface Service {
  title: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    title: "Auditorio",
    image: "/image1.png",
    alt: "Auditorio con sillas y proyector",
  },
  {
    title: "Sala de capacitación",
    image: "/image1.png",
    alt: "Sala equipada para capacitación con mesas y sillas",
  },
  {
    title: "Laboratorio equipado",
    image: "/image1.png",
    alt: "Laboratorio con laptops en escritorios",
  },
  {
    title: "Sala de eventos corporativos",
    image: "/image1.png",
    alt: "Sala de eventos con sillas y alfombra roja",
  },
];

const Services = () => {
  return (
    <section className="pt-16 pb-16">
      <div className="w-[85%] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#ED8430] mb-10">
          Nuestros Principales Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx}>
              <div className="bg-[#943315] text-white p-6 font-semibold text-sm">
                {service.title}
              </div>
              <Image
                src={service.image}
                alt={service.alt}
                width={300}
                height={200}
                className="w-full h-80 object-cover"
                priority 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
