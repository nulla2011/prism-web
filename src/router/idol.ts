import { RouteRecordRaw } from 'vue-router';

let idols: RouteRecordRaw[] = [
  {
    path: '/idol/:idolName',
    name: 'idol',
    component: () => import('@/layouts/Idol.vue'),
  },
];
export default idols;
