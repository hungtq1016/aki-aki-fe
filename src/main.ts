import './assets/main.css'
import "@egjs/vue3-flicking/dist/flicking.css";
import 'vue3-easy-data-table/dist/style.css';
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import Toast from "vue-toastification";

import {i18n} from '@/core/services/base/translation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(Toast, { transition: "Vue-Toastification__bounce", maxToasts: 20, newestOnTop: true });
app.mount('#app')
