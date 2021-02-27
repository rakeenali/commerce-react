import axios, { AxiosRequestConfig } from 'axios'

export function patch(url: string, data: any, config: AxiosRequestConfig) {
  return axios.patch(process.env.REACT_APP_BASE_URL + '/' + url, data, config)
}
