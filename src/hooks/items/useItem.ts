import axios from 'axios'

import useQuery from '../useQuery'
import { IRespItem } from '../../types'
import { useUser } from '../../stores'

export function useItem(id: number) {
  const token = useUser((state) => state.token)

  const query = useQuery<IRespItem>(['item', id], () =>
    axios.get(`${process.env.REACT_APP_BASE_URL}/items/item/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  )

  return query
}
