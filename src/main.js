import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './api.js';

createApp(App).use(VueAxios, axios).mount('#app');
