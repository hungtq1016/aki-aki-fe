import './assets/main.css'
import '@egjs/vue3-flicking/dist/flicking.css'
import 'vue3-easy-data-table/dist/style.css'
import 'vue-toastification/dist/index.css'
import 'vue-multiselect/dist/vue-multiselect.css'
import '@vuepic/vue-datepicker/dist/main.css'
import 'sweetalert2/src/sweetalert2.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import Toast from 'vue-toastification'
import CKEditor from '@ckeditor/ckeditor5-vue'
import VueDatePicker from '@vuepic/vue-datepicker'

import { i18n } from '@/core/services/base/translation'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(CKEditor)
app.component('EasyDataTable', Vue3EasyDataTable)
app.component('VueDatePicker', VueDatePicker)
app.use(Toast, { transition: 'Vue-Toastification__bounce', maxToasts: 20, newestOnTop: true })
app.mount('#app')