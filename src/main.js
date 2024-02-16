import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3TouchKeyboard from 'vue3-touch-keyboard';

const app = createApp(App);

app.use(Vue3TouchKeyboard);

app.mount('#app')
