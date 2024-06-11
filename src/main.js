import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
//  Wow.js
import "./assets/css/animate.css";
import WOW from "./assets/js/wow.min.js";

const wow = new WOW();
wow.init();
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, fab);
import Headroom from "headroom.js";

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
const header = document.querySelector("header");
const headroom = new Headroom(header);
headroom.init();
