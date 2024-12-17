
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '../.env');

dotenv.config({ path: envPath });

module.exports = {
  output: 'export',
  // distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, 
  },
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

}
