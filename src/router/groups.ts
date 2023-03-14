import { RouteRecordRaw } from 'vue-router';
import AppVue from '@/App.vue';
import { groups } from '@/constant/group';
import Group from '@/components/Group.vue';

let children = new Array<RouteRecordRaw>();
for (const key in groups) {
  children.push({
    name: groups[key as keyof typeof groups],
    path: key,
    component: Group,
  } as RouteRecordRaw);
}
let grps: RouteRecordRaw[] = [
  {
    path: '/group',
    name: 'GROUPS',
    component: AppVue,
    children: children,
  },
];

export default grps;
