/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // disabilita il linting durante la fase di build
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;
  