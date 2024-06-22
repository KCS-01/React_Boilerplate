import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            "~apis": "/src/apis",
            "~assets": "/src/assets",
            "~components": "/src/components",
            "~configs": "/src/configs",
            "~hooks": "/src/hooks",
            "~pages": "/src/pages",
            "~routes": "/src/routes",
            "~stores": "/src/stores",
            "~styles": "/src/styles",
        },
    },
});
