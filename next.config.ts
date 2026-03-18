import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/portfolio-luvtorn',
  trailingSlash: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
