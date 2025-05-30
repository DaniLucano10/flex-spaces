import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/home/navbar/ResponsiveNav";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Footer from "@/components/home/footer/Footer";
import AOSInitializer from "@/components/AOSInitializer";


const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alquiler de Aulas y Salas en Lima | Espacios Flex",
  description:
    "Renta de aulas, salas de capacitación y espacios flexibles en Lima. Espacios modernos, equipados y listos para cursos, talleres o reuniones. Reserva de manera fácil y rápida.",

  keywords: [
    "alquiler de aulas Lima",
    "renta de salas de capacitación",
    "espacios para cursos en Lima",
    "salas de reuniones",
    "aulas por horas Lima",
    "renta de espacios para talleres",
    "espacios flexibles Lima",
    "alquiler de oficinas por horas",
    "coworking Lima",
    "Espacios Flex Perú",
  ],

  authors: [{ name: "Espacios Flex", url: "https://tusitio.com" }],
  creator: "Espacios Flex",
  publisher: "Espacios Flex",

  openGraph: {
    title: "Alquiler de Aulas y Salas en Lima | Espacios Flex",
    description:
      "Renta espacios modernos y equipados para tus cursos, talleres o reuniones en Lima. Reserva online fácilmente.",
    url: "https://tusitio.com",
    siteName: "Espacios Flex",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://tusitio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aulas modernas disponibles en Lima con Espacios Flex",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Espacios Flex | Alquiler de Aulas y Salas en Lima",
    description:
      "Alquila aulas y salas equipadas para capacitación y reuniones en Lima. Espacios modernos y flexibles.",
    images: ["https://tusitio.com/og-image.jpg"],
    site: "@espaciosflex",
    creator: "@espaciosflex",
  },

  metadataBase: new URL("https://tusitio.com"),

  other: {
    "geo.region": "PE-LMA", // Código de región para Lima Metropolitana
    "geo.placename": "Lima",
    "geo.position": "-12.0464;-77.0428", // Coordenadas de Lima
    ICBM: "-12.0464, -77.0428",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/x-icon"/>
      </head>
      <body className={`${font.className} antialiased`}>
        <AOSInitializer />
        <ResponsiveNav />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
