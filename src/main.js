import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css"; // your Tailwind CSS or global styles

createApp(App).use(router).mount("#app");
