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
      
      <TextWithImage />
      <Commitment />
      <Social />
      <ContactForm />
    </main>
  );
};

export default Page;
