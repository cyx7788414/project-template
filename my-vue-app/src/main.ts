import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
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

// global
app.config.globalProperties.$test = () => new Date();

// use
app.use(i18n);

app.mount('#app');
