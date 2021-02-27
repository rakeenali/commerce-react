import { useMemo, useState } from 'react'

import { get } from '../api'
import useQuery from '../useQuery'
import { IRespItems } from '../../types'
import { useUser } from '../../stores'

type Params = {
  page: number
  pageSize: number
}

export function useItems({ page, pageSize }: Params) {
  const token = useUser((state) => state.token)

  const [currentPage, setCurrentPage] = useState(page)

  const query = useQuery<IRespItems>(
    ['items', currentPage],
    () =>
      get(`items/list?page_size=${pageSize}&page=${currentPage}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    { keepPreviousData: true }
  )

  const count = useMemo(() => {
    if (query.query.isFetched) {
      if (query.data) {
        return Math.ceil(query.data.data.meta.count / pageSize)
      }
      return 0
    }
    return 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.query.isFetching, query.data])

  return { query, count, setCurrentPage }
}
