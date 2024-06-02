import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { App as AppAntd, Button, ConfigProvider } from 'ant-design-vue'

const app = createApp(App);

// global
app.config.globalProperties.$test = () => new Date();

// use
app.use(AppAntd)
app.use(Button);
app.use(ConfigProvider);

app.mount('#app');
