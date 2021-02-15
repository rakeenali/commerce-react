import { useState, useEffect } from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import Item from './components/Item'
import Paginator from '../../components/Paginator'
import { useQuery } from '../../hooks'

function Items() {
  const [currentPage, setCurrentPage] = useState<number>(2)
  const query = useQuery()
  const history = useHistory()

  useEffect(() => {
    const page = query.get('page')
    if (!page) {
      history.push(`/items?page=${currentPage}`)
    }
  }, [currentPage, history, query])

  const updatePage = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
    history.push(`/items?page=${pageNumber}`)
  }

  return (
    <Box m="8">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </SimpleGrid>
      <Paginator count={5} currentPage={currentPage} updatePage={updatePage} />
    </Box>
  )
}

export default Items
