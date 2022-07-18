/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl: "Your MongoDB connection String",
  },
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
