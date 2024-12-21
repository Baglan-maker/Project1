import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

import path from "path";
import { config } from 'dotenv';

const envFile = process.env.NODE_ENV === "production" ? ".env" : ".env.development";

config({ path: path.resolve(process.cwd(), envFile) });

module.exports = {  
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    IGNORE_CAPTCHA: process.env.IGNORE_CAPTCHA,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://675ca3b5fe09df667f6468f8.mockapi.io/:path*", // API-URL
      },
    ];
  },
};

export default nextConfig;
