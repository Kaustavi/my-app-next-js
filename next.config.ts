import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL, // Replace with your API URL
  }
};

export default nextConfig;
