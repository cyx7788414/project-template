import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

// global
app.config.globalProperties.$test = () => new Date();

// use

app.mount('#app');
