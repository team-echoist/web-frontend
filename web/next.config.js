/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/emailcheck",
        destination: process.env.NEXT_PUBLIC_API_URL + "auth/verify",
      },
      {
        source: "/checkfirstlogin",
        destination: process.env.NEXT_PUBLIC_API_URL + "auth/register",
      },
      {
        source: "/signin",
        destination: process.env.NEXT_PUBLIC_API_URL + "auth/login",
      },
    ];
  },
};

module.exports = withPWA(nextConfig);