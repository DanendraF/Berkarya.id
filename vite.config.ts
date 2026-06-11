import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server", preset: "vercel" },
    }),
    nitro(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    host: true,
    strictPort: true,
  },
});
