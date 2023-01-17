import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./routes";
import store from "./store/Index";
const app = createApp(App).use(router).use(store);

app.mount("#app");
