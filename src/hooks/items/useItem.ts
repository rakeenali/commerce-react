import { get } from '../api'
import useQuery from '../useQuery'
import { IRespItem } from '../../types'
import { useUser } from '../../stores'

export function useItem(id: number) {
  const token = useUser((state) => state.token)

  const query = useQuery<IRespItem>(['item', id], () =>
    get(`items/item/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  )

  return query
}
