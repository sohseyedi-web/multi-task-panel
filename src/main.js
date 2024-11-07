import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify';
import { createPinia } from 'pinia';
import { router } from './routes/index';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Vue3Toastify)
  .mount("#app");
