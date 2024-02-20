/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: process.env.NEXT_PUBLIC_API,
  },
};

export default nextConfig;
