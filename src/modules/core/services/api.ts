import axios, { AxiosRequestConfig } from 'axios';
import { HttpStatusCode } from '@modules/core/enums';

const axiosInstance = axios.create();

const getData = async <TResponse>(uri: string, config?: AxiosRequestConfig): Promise<TResponse | undefined> => {
  const response = await axiosInstance.get<TResponse>(uri, config);
  if (!response || response.status === HttpStatusCode.NO_CONTENT) {
    return undefined;
  }

  return response.data;
};

export default { ...axiosInstance, getData };
