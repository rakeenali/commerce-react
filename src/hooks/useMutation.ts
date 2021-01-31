import {
  useMutation as rqUseMutation,
  UseMutationResult,
  MutationFunction,
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
  getData: () => Response
  getError: () => IErrorResp
}

function useMutation<Response, Variables>(
  fn: MutationFunction<any, Variables>
): IUseMutation<Response, Variables> {
  const mutation = rqUseMutation<
    AxiosResponse<Response>,
    AxiosError<IErrorResp>,
    Variables
  >(fn)

  const mutate = (data: Variables): void => {
    mutation.mutate(data)
  }

  const getData = (): Response => {
    return mutation.data?.data!
  }

  const getError = (): IErrorResp => {
    return mutation.error?.response?.data!
  }

  return { mutation, getData, getError, mutate }
}

export default useMutation
