import { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import useMutation from './useMutation'
import { IRespCreateUser } from '../types'

import { useToast } from '../stores'

type Variables = {
  username: string
  password: string
  first_name: string
  last_name: string
}

export function useSignup() {
  const history = useHistory()
  const { showToast } = useToast()

  const register = useMutation<IRespCreateUser, Variables>((data) =>
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, data)
  )

  useEffect(() => {
    if (register.mutation.isSuccess) {
      const { data, message } = register.getData()
      if (data) {
        history.push('/auth/login', { replace: true })
        showToast('Registered Successfully', message)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register.mutation.isSuccess])

  return {
    mutation: register.mutation,
    mutate: register.mutate,
    getData: register.getData,
    getError: register.getError,
  }
}
