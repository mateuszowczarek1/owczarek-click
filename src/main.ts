
import { createApp } from 'vue';
import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';
import App from './App.vue';
import './style.css';
import { Engine } from '@tsparticles/engine';


createApp(App).use(Particles, {
    init: async (engine: Engine) => {
        await loadFull(engine as Engine); 
    },
}).mount('#app');