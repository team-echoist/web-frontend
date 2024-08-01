/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        source: "/web/:pagename",
        destination: "/web/[pagename]",
      },
    ];
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/web/main': { page: '/web/[pagename]', query: { pagename: 'main' } },
      '/web/findinfo': { page: '/web/[pagename]', query: { pagename: 'findinfo' } },
      '/web/login': { page: '/web/[pagename]', query: { pagename: 'login' } },
      '/web/signup': { page: '/web/[pagename]', query: { pagename: 'signup' } },
      '/web/complete': { page: '/web/[pagename]', query: { pagename: 'complete' } },
      '/web/mypage': { page: '/web/[pagename]', query: { pagename: 'mypage' } },
      '/web/register': { page: '/web/[pagename]', query: { pagename: 'register' } },
      '/web/write_essay': { page: '/web/[pagename]', query: { pagename: 'write_essay' } },
    };
  },
};

export default nextConfig;