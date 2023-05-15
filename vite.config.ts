import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import polyfillKaiOS from "./scripts/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte(), polyfillKaiOS()],
	server: {
		port: 3000,
	},
	build: {
		target: "es6",
		cssTarget: "firefox48",
		cssCodeSplit: false,
		modulePreload: false,
		assetsInlineLimit: 0,
		minify: true,
		ssr: false,
		rollupOptions: {
			output: {
				format: "iife",
			},
		},
	},
	worker: {
		plugins: [polyfillKaiOS()],
	},
});
