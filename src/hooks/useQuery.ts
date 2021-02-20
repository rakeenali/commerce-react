import { useEffect, useState } from 'react'
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
  getError: () => IErrorResp | undefined
  error: string
  data: Response | null
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

  const [error, setError] = useState<string>('')
  const [respData, setRespData] = useState<Response | null>(null)

  const getError = (): IErrorResp | undefined => {
    return query.error?.response?.data
  }

  const getData = (): Response | undefined => {
    return query.data?.data
  }

  useEffect(() => {
    if (query.isError) {
      const data = getError()
      setRespData(null)
      if (data) {
        console.log('error', data.message)
        setError(data.message)
        return
      }
      setError(query.error?.message ?? '')
    }

    if (query.isSuccess) {
      const data = getData()
      if (data) {
        setRespData(data)
        setError('')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.isFetching, query.isError, query.isSuccess, query.isLoading])

  return { getError, query, error, data: respData }
}

export default useQuery
