import request from '@/plugins/axios';

export default async (id: number) => {
  let res = await Promise.all([
    request(`character/produceIdols?id=${id}`),
    request(`character/supportIdols?id=${id}`),
  ]);
  return { produceIdols: res[0], supportIdols: res[1] };
};
