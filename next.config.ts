import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output:'export',
  typescript:{
    ignoreBuildErrors:true
  }
 
};

export default nextConfig;
