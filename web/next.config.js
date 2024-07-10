/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});
const withVideos = require('next-videos');

const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPWA(withVideos(nextConfig));