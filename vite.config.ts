import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    router: { entry: "router" },
    server: { entry: "server" },
  },
});
