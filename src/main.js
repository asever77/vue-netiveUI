import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/app.scss';
import UI from '@/assets/js/ui.global.js'

createApp(App).use(store).use(router).use(UI).mount('#app');
