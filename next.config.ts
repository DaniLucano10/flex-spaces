import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true, // Usa módulos ES modernos para dependencias externas cuando sea posible
  },
  // Opcional, generalmente es 'web' por defecto, pero puedes asegurar que el target sea moderno
  webpack(config) {
    config.target = "web"; 
    return config;
  },
};

export default nextConfig;
