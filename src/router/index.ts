import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Comic from '@/views/Comic.vue';
import groups from './groups';
import idols from './idol';

let routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/comic',
    name: 'comic',
    component: Comic,
  },
];
routes = routes.concat(groups, idols);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
