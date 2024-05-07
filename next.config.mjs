/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    domains:["i.pinimg.com", 'img.freepik.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: 'image/upload/**',
      },
    ],
  },
};

export default nextConfig;
