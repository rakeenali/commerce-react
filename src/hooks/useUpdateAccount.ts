import { useEffect } from 'react'
import { post } from './api'

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
    post('users/account-update', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  )

  useEffect(() => {
    if (update.mutation.isSuccess) {
      if (update.data) {
        const { data, message } = update.data
        setAccount(data)
        showToast('Account update successfully', message)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update.mutation.isSuccess, update.data])

  return update
}
