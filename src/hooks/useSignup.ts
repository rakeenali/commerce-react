import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { post } from './api'

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
    post('users/register', data)
  )

  useEffect(() => {
    if (register.mutation.isSuccess) {
      if (register.data) {
        const { message } = register.data
        history.push('/auth/login', { replace: true })
        showToast('Registered Successfully', message)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register.mutation.isSuccess])

  return register
}
