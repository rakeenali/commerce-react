import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useQuery } from './useQuery'

type Props = {
  count: number
}

export function usePaginator({ count }: Props) {
  const query = useQuery()
  const history = useHistory()

  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    const page = query.get('page')
    if (page) {
      const pageN = parseInt(page)
      if (isNaN(pageN)) {
        history.push(`/items?page=${currentPage}`)
      } else {
        if (pageN === currentPage) return

        if (pageN <= count && pageN >= 1) {
          setCurrentPage(pageN)
        } else {
          history.push(`/items?page=${currentPage}`)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const updatePage = (page: number) => {
    setCurrentPage(page)
    history.push(`/items?page=${page}`)
  }

  return { currentPage, updatePage }
}
