import { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import useMutation from './useMutation'
import { useUser, useToast } from '../stores'
import { IRespLoginUser } from '../types'

type Variables = {
  username: string
  password: string
}

export function useLogin() {
  const history = useHistory()
  const setToken = useUser((state) => state.setToken)
  const setUser = useUser((state) => state.setUser)
  const { showToast } = useToast()

  const login = useMutation<IRespLoginUser, Variables>((data) =>
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, data)
  )

  useEffect(() => {
    if (login.mutation.isSuccess) {
      if (login.data) {
        const { data } = login.data
        localStorage.setItem('token', data.token)
        history.push('/', { replace: true })
        setUser(data.user)
        setToken(data.token)
        const account = data.user.account
        showToast(
          'Logged in successfully',
          `Welcome ${account.firstName} ${account.lastName}`
        )
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login.mutation.isSuccess])

  return login
}
