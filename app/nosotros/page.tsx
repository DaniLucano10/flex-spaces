"use client";

import Banner from "./components/Banner";
import TextWithImage from "./components/TextWithImage";
import Commitment from "./components/Commitment";
import Social from "./components/Social ";
import ContactForm from "./components/ContactForm";

const Page = () => {
  return (
    <main className="pb-4 pt-16">
      <Banner />
      {/* Título Secundario */}
      <section className="w-[85%] mx-auto mt-10 text-center md:text-start">
        <h2 className="text-xl md:text-3xl text-[#ED8430] font-semibold">
          Somos más que una plataforma de alquiler de aulas
        </h2>
      </section>
      <TextWithImage />
      <Commitment />
      <Social />
      <ContactForm />
    </main>
  );
};

export default Page;
