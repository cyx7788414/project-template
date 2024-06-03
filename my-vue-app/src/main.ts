import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { App as AppAntd, Button, ConfigProvider } from 'ant-design-vue'
import { router } from './app.router';
import {createPinia} from 'pinia';
import 'virtual:uno.css'
import {createI18n} from 'vue-i18n';

import zh from '../locales/zh-CN.json';
import en from '../locales/en.json';

const i18n = createI18n({
    locale: 'en',
    messages: {
        'zh-CN': zh,
        en
    }
});

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

app.use(i18n);

app.mount('#app');
