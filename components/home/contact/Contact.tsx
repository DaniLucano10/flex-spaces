import Image from "next/image";

const Contact = () => {
  const servicios = [
    "Auditorio",
    "Sala de capacitación",
    "Laboratorio equipado",
    "Sala de eventos corporativos",
  ];

  return (
    <section className="pt-12 pb-16 bg-[#FFEADD]" id="contact">
      <div className="md:w-[85%] mx-auto px-4 text-center md:text-start">
        <h2 className="text-3xl font-extrabold text-[#943315] mb-10">
          Contacta Un Asesor Comercial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 order-2 md:order-1">
            <div className="w-full aspect-square rounded-lg shadow overflow-hidden">
              <Image
                src="/images/home/asesora-form-1.webp"
                alt="Imagen asesora comercial"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
                data-aos="fade-right"
              />
            </div>
          </div>

          <div className="md:col-span-2 order-1 md:order-2 p-6" data-aos="fade-left">
            <form aria-label="Formulario de contacto para asesor comercial">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-1">
                  <label
                    htmlFor="nombre"
                    className="block text-[#943315] text-lg text-start font-bold mb-1"
                  >
                    Nombres y Apellidos
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className="w-full border bg-white border-gray-300 rounded px-3 py-1"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="telefono"
                    className="block text-start text-[#943315] text-lg font-bold mb-1"
                  >
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    className="w-full border bg-white border-gray-300 rounded px-3 py-1"
                    placeholder="+51 000 000 000"
                    required
                  />
                </div>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-start text-[#943315] text-lg font-bold mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border bg-white border-gray-300 rounded px-3 py-1"
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              <fieldset className="mb-2">
                <legend className="block text-start text-[#943315] text-lg font-bold mb-1">
                  ¿Qué servicio requiere?
                </legend>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  {servicios.map((servicio, index) => {
                    const id = `servicio-${index}`;
                    return (
                      <label
                        key={id}
                        htmlFor={id}
                        className="flex items-center space-x-2 text-gray-700 mb-2 md:mb-0 md:text-sm md:max-w-[200px] whitespace-nowrap truncate"
                        title={servicio}
                      >
                        <input
                          type="radio"
                          id={id}
                          name="servicio"
                          value={servicio}
                          className="text-[#943315]"
                          required
                        />
                        <span>{servicio}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mb-2">
                <label
                  htmlFor="descripcion"
                  className="block text-start text-[#943315] text-lg font-bold mb-1"
                >
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={3}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 resize-y"
                  placeholder="Escribe una descripción detallada..."
                  required
                ></textarea>
              </div>

              <div className="flex items-center w-full justify-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#943315] font-bold text-white px-16 py-1 hover:bg-orange-900 cursor-pointer"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
