/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});


const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPWA(nextConfig);