/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/emailcheck",
  //       destination: process.env.NEXT_PUBLIC_API_URL + "auth/verify",
  //     },
  //     {
  //       source: "/signin",
  //       destination: process.env.NEXT_PUBLIC_API_URL + "auth/login",
  //     },
  //     {
  //       source: "/googleAuth",
  //       destination: process.env.NEXT_PUBLIC_API_URL + "auth/google",
  //     },
  //     {
  //       source: "/kakaoAuth",
  //       destination: process.env.NEXT_PUBLIC_API_URL + "auth/kakao",
  //     },
  //     {
  //       source: "/naverAuth",
  //       destination: process.env.NEXT_PUBLIC_API_URL + "auth/naver",
  //     },
  //     {
  //       source: "/appleAuth",
  //       destination: process.env.NEXT_PUBLIC_API_URL + "auth/apple",
  //     },
  //     {
  //       source: "/web/:pagename",
  //       destination: "/web/[pagename]",
  //     },
  //   ];
  // },
}
