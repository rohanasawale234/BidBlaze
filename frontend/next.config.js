
// Note: This project uses Vite + React Router, not Next.js
// This file is not needed and should not be used.
// Environment variables are loaded from .env.local in development
// and configured in Vercel dashboard for production.

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
