import axios from 'axios'

import useQuery from '../useQuery'
import { IRespTagList } from '../../types'
import { useUser } from '../../stores'

export function useTags() {
  const token = useUser((state) => state.token)

  const query = useQuery<IRespTagList>(['tags'], () =>
    axios.get(`${process.env.REACT_APP_BASE_URL}/tags/list`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  )

  return query
}
