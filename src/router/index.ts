import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../HomeView.vue';


const routes = [
  { path: '/:pathMatch(.*)*', component: HomeView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;