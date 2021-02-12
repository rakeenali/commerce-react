import { useEffect, useState } from 'react'
import {
  useMutation as rqUseMutation,
  UseMutationResult,
  MutationFunction,
  UseMutationOptions,
} from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { IErrorResp } from '../types'

interface IUseMutation<Response, Variables> {
  mutation: UseMutationResult<
    AxiosResponse<Response>,
    AxiosError<IErrorResp>,
    Variables
  >
  mutate: (data: Variables) => void
  getError: () => IErrorResp | undefined
  error: string
  data: Response | null
}

function useMutation<Response, Variables>(
  fn: MutationFunction<any, Variables>,
  options?: UseMutationOptions<
    AxiosResponse<Response>,
    AxiosError<IErrorResp>,
    Variables,
    any
  >
): IUseMutation<Response, Variables> {
  const mutation = rqUseMutation<
    AxiosResponse<Response>,
    AxiosError<IErrorResp>,
    Variables
  >(fn, options)

  const [error, setError] = useState<string>('')
  const [respData, setRespData] = useState<Response | null>(null)

  const mutate = (data: Variables): void => {
    mutation.mutate(data)
  }

  const getData = (): Response | undefined => {
    return mutation.data?.data
  }

  const getError = (): IErrorResp | undefined => {
    return mutation.error?.response?.data
  }

  useEffect(() => {
    if (mutation.isError) {
      const data = getError()
      setRespData(null)
      if (data) {
        setError(data.message)
        return
      }
      setError(mutation.error?.message ?? '')
    }

    if (mutation.isSuccess) {
      const data = getData()
      if (data) {
        setRespData(data)
        setError('')
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutation.isLoading, mutation.isError, mutation.isSuccess])

  return { mutation, getError, mutate, error, data: respData }
}

export default useMutation
