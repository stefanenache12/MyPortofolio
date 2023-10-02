import { createApp } from 'vue';

import App from './App.vue';

import * as bootstrap from 'bootstrap';

import { router } from './router';

import './main.css'

createApp(App).use(router).mount('#app')
