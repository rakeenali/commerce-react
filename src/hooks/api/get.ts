import axios, { AxiosRequestConfig } from 'axios'

export function get(url: string, config: AxiosRequestConfig) {
  return axios.get(process.env.REACT_APP_BASE_URL + '/' + url, config)
}
