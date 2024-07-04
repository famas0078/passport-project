import { createApp } from 'vue'
import '@/assets/scss/style.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from "@/router";

const app = createApp(App);

app.use(router);

app.config.globalProperties.BACK_URL = process.env.VUE_APP_BACKEND_API_BASE;

app.mount('#app');
