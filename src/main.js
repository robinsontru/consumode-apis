import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//IMPORT BOSTRA
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
//axios
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(router).use(VueAxios,axios).mount('#app')
