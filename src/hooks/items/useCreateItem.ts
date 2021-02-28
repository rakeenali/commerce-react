import { useHistory } from 'react-router-dom'

import { post } from '../api'
import useMutation from '../useMutation'
import { IRespItem } from '../../types'
import { useUser } from '../../stores'

type Tag = {
  name: string
}

type Variables = {
  name: string
  sku: string
  price: number
  description: string
  tags: Tag[]
  images: string[]
}

export function useCreateItem() {
  const history = useHistory()

  const token = useUser((state) => state.token)

  const item = useMutation<IRespItem, Variables>(
    (data) =>
      post('items/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: (item) => {
        history.push(`/items/${item.data.data.id}`)
      },
    }
  )

  const create = (variables: Variables): void => {
    item.mutate(variables)
    return
  }

  return { item, create }
}
