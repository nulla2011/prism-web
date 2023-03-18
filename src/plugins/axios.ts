import Axios, { AxiosResponse } from 'axios';
import BASE_URL from '@/constants/apiBaseUrl';

export default async function get(url: string) {
  let response: AxiosResponse;
  let service = Axios.create({
    baseURL: BASE_URL,
  });
  response = await service.get(url);
}
