import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { Icon } from '@iconify/vue';
import './assets/tailwind.css'

createApp(App).component('Icon', Icon).use(router).mount('#app')
