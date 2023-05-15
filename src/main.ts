import "./app.css";
import App from "./App.svelte";

/**
 * import polyfills manually
 */
import "core-js/actual/array/flat";
import "core-js/actual/array/find-last";
import "core-js/actual/array/to-sorted";
import "core-js/actual/string/match-all";

const app = new App({
	target: document.getElementById("app"),
});

export default app;
