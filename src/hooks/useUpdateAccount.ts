import { useEffect } from 'react'
import axios from 'axios'

import useMutation from './useMutation'
import { IRespAccount } from '../types'

import { useToast, useUser } from '../stores'

type Variables = {
  first_name: string
  last_name: string
}

export function useUpdateAccount() {
  const { showToast } = useToast()
  const { setAccount, token } = useUser()

  const update = useMutation<IRespAccount, Variables>((data) =>
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/account-update`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  )

  useEffect(() => {
    if (update.mutation.isSuccess) {
      const { data, message } = update.getData()
      if (data) {
        setAccount(data)
        showToast('Account update successfully', message)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update.mutation.isSuccess])

  return {
    mutation: update.mutation,
    mutate: update.mutate,
    getData: update.getData,
    getError: update.getError,
  }
}
