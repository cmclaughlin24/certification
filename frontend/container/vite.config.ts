import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        authentication: `${process.env.VITE_AUTHENTICATION_HOST || "http://localhost:3001"}/assets/remoteEntry.js`,
        certification: `${process.env.VITE_CERTIFICATION_HOST || "http://localhost:3002"}/assets/remoteEntry.js`,
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
