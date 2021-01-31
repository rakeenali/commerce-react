import {
  useQuery as rquUseQuery,
  UseQueryOptions,
  QueryObserverResult,
  QueryFunction,
  QueryKey,
} from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { IErrorResp } from '../types'

interface IUseQuery<Response> {
  getData: () => Response
  getError: () => IErrorResp
  query: QueryObserverResult<AxiosResponse<Response>, AxiosError<IErrorResp>>
}

function useQuery<Response>(
  key: QueryKey,
  fn: QueryFunction<AxiosResponse<Response>>,
  options?: UseQueryOptions<
    any,
    AxiosError<IErrorResp>,
    AxiosResponse<Response>
  >
): IUseQuery<Response> {
  const query = rquUseQuery<AxiosResponse<Response>, AxiosError<IErrorResp>>(
    key,
    fn,
    options
  )

  const getError = (): IErrorResp => {
    return query.error?.response?.data!
  }

  const getData = (): Response => {
    return query.data?.data!
  }

  return { getData, getError, query }
}

export default useQuery
