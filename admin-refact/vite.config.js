/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 현재 디렉토리를 기준으로 상대 경로 지정
      context: path.resolve(__dirname, "./src/context"),
      components: path.resolve(__dirname, "./src/components"),
      examples: path.resolve(__dirname, "./src/examples"),
      assets: path.resolve(__dirname, "./src/assets"),
      layouts: path.resolve(__dirname, "./src/layouts"),
    },
  },
  server: {
    proxy: {
<<<<<<< HEAD
      "/api2": {
=======
      "/api1": {
>>>>>>> 6c27c416e18c3af23ca6089b99dc981eb6c45f37
        target: "https://www.linkedoutapp.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api1/, ""),
      },
    },
  },
});
