import Axios, { AxiosResponse } from 'axios';
import BASE_URL from '@/constants/apiBaseUrl';

export default async function request(url: string) {
  let response: AxiosResponse;
  let service = Axios.create({
    baseURL: BASE_URL,
  });
  response = await service.get(url);
  return response.data;
}
