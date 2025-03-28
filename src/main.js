import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import components from "./components/UI/index";
const app = createApp(App);

components.forEach((component) => app.component(component.__name, component));

app.mount("#app");
