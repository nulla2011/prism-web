import groups from '@/constant/group';
import idols from '@/constant/idols';
export default (group: string) => {
  let id = Object.keys(groups).findIndex((el) => el === group) + 1;
  let list = [];
  for (const idol of idols) {
    if (parseInt(idol.unitId) === id) {
      list.push(idol);
    }
  }
  return list;
};
