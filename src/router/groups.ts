import { RouteRecordRaw } from 'vue-router';
// import groups from '@/constant/group';

// let children = new Array<RouteRecordRaw>();
// for (const key in groups) {
//   children.push({
//     name: groups[key as keyof typeof groups],
//     path: key,
//     component: Group,
//   } as RouteRecordRaw);
// }
let groups: RouteRecordRaw[] = [
  {
    path: '/group/:groupName',
    name: 'GROUPS',
    component: () => import('@/layouts/Group.vue'),
  },
];

export default groups;
