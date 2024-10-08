import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"


// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ICONS
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).mount('#app')
