/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});
const withVideos = require('next-videos');
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

module.exports = withPWA(withVideos(nextConfig));