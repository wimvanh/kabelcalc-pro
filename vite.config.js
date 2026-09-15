import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    base: "/kabelcalc-pro/",
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "KabelCalc Pro BE",
                short_name: "KabelCalc",
                description: "Professionele kabel- en spanningsvalberekening",
                theme_color: "#07111f",
                background_color: "#07111f",
                display: "standalone",
                start_url: "/kabelcalc-pro/"
            },
            workbox: {
                globPatterns: ["**/*.{js,css,html,svg,png}"]
            }
        })
    ]
});