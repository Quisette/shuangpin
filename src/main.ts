import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import persistPlugin from "pinia-plugin-persistedstate";
import router from "./router"; // Import the router instance
import "./utils/polyfill";

const pinia = createPinia();
pinia.use(persistPlugin);

createApp(App).use(pinia).use(router).mount("#app");