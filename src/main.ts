import { createApp, Directive } from "vue";
import { createPinia } from "pinia";
import "./css/index.css";
import "./css/iconsStyle.css";
import router from "./router/router";
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");

app.directive("click-outside", <Directive>{
  mounted(element, { value }) {
    element.clickOutside = function (event: Event) {
      if (!(element == event.target || element.contains(event.target))) {
        value(event);
      }
    };
    document.body.addEventListener("click", element.clickOutside);
  },
  unmounted(element) {
    document.body.removeEventListener("click", element.clickOutside);
  },
});
