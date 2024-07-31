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
        source: "/signin",
        destination: process.env.NEXT_PUBLIC_API_URL + "auth/login",
      },
      {
        source: "/googleAuth",
        destination: process.env.NEXT_PUBLIC_API_URL + "auth/google",
      },
      {
        source: "/kakaoAuth",
        destination: process.env.NEXT_PUBLIC_API_URL + "auth/kakao",
      },
      {
        source: "/naverAuth",
        destination: process.env.NEXT_PUBLIC_API_URL + "auth/naver",
      },
      {
        source: "/appleAuth",
        destination: process.env.NEXT_PUBLIC_API_URL + "auth/apple",
      },
    ];
  },
};

module.exports = withPWA(nextConfig);