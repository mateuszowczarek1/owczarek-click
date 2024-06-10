
import { createApp } from 'vue';
import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';
import App from './App.vue';
import './style.css';
import { Engine } from '@tsparticles/engine';
import router from './router/index.ts';


createApp(App).use(Particles, {
    init: async (engine: Engine) => {
        await loadFull(engine as Engine); 
    },
}).use(router).mount('#app');