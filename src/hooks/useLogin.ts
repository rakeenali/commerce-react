import { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import useMutation from './useMutation'
import { useUser } from '../stores'
import { IRespLoginUser } from '../types'

type Variables = {
  username: string
  password: string
}

function useLogin() {
  const history = useHistory()
  const setToken = useUser((state) => state.setToken)
  const setUser = useUser((state) => state.setUser)

  const login = useMutation<IRespLoginUser, Variables>((data) =>
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, data)
  )

  useEffect(() => {
    if (login.mutation.isSuccess) {
      const { data } = login.getData()
      if (data) {
        localStorage.setItem('token', data.token)
        history.push('/', { replace: true })
        setUser(data.user)
        setToken(data.token)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login.mutation.isSuccess])

  return {
    mutation: login.mutation,
    mutate: login.mutate,
    getData: login.getData,
    getError: login.getError,
  }
}

export default useLogin