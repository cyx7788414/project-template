import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { App as AppAntd, Button, ConfigProvider } from 'ant-design-vue'
import { router } from './app.router';
import {createPinia} from 'pinia';

const app = createApp(App);
const pinia = createPinia();

// global
app.config.globalProperties.$test = () => new Date();

// use
app.use(router);
app.use(pinia);

app.use(AppAntd)
app.use(Button);
app.use(ConfigProvider);


app.mount('#app');
