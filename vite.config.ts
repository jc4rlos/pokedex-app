import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
    globals: true,
  },
});
