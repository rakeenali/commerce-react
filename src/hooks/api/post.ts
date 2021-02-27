import axios, { AxiosRequestConfig } from 'axios'

export function post(url: string, data: any, config?: AxiosRequestConfig) {
  return axios.post(process.env.REACT_APP_BASE_URL + '/' + url, data, config)
}
