import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import useQuery from './useQuery'
import { IRespAuthenticate } from '../types'
import { useUser } from '../stores'

import { get } from './api/get'

export function useAuth() {
  const history = useHistory()
  const setUser = useUser((state) => state.setUser)
  const setAdmin = useUser((state) => state.setAdmin)
  const setToken = useUser((state) => state.setToken)
  const setLoading = useUser((state) => state.setLoading)

  const token = localStorage.getItem('token')

  const auth = useQuery<IRespAuthenticate>(
    ['auth'],
    () =>
      get('users/authenticate', {
        headers: { Authorization: `Bearer ${token}` },
      }),
    {
      enabled: false,
      retry: 3,
    }
  )

  useEffect(() => {
    const status = auth.query.status
    if (status === 'error') {
      history.push('/auth/login', { replace: true })
      setLoading(false)
    } else if (status === 'success') {
      if (auth.data) {
        setUser(auth.data.data)
        setAdmin(auth.data.data)
        setToken(token!)
        setLoading(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.query.status, history, auth.data, auth.error])

  return auth
}
