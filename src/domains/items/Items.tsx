import { SimpleGrid, Box } from '@chakra-ui/react'

import Item from './components/Item'
import Paginator from '../../components/Paginator'
import { usePaginator } from '../../hooks'

const count = 5

function Items() {
  const paginator = usePaginator({ count })

  const updatePage = (pageNumber: number): void => {
    paginator.updatePage(pageNumber)
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
      <Paginator
        count={count}
        currentPage={paginator.currentPage}
        updatePage={updatePage}
      />
    </Box>
  )
}

export default Items
