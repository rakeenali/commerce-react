import { get } from '../api'
import useQuery from '../useQuery'
import { IRespTagList } from '../../types'
import { useUser } from '../../stores'

export function useTags() {
  const token = useUser((state) => state.token)

  const query = useQuery<IRespTagList>(['tags'], () =>
    get(`tags/list`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  )

  return query
}
