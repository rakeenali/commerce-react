import { useEffect } from 'react'
import { SimpleGrid, Box, Button } from '@chakra-ui/react'

import Item from './components/Item'
import Paginator from '../../components/Paginator'
import { usePaginator, useItems } from '../../hooks'

function Items() {
  const { query: items, count, setCurrentPage } = useItems({
    page: 1,
    pageSize: 9,
  })
  const { currentPage, updatePage: updatePagPage } = usePaginator({ count })

  const updatePage = (pageNumber: number): void => {
    updatePagPage(pageNumber)
  }

  useEffect(() => {
    setCurrentPage(currentPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  // console.log('items', items.query.data?.data.data.meta)

  const renderItems = (): JSX.Element[] | JSX.Element => {
    if (items.data) {
      return items.data.data.items.map((item) => (
        <Item {...{ item }} key={`Items-${item.id}`} />
      ))
    }
    return <></>
  }

  return (
    <Box m="8">
      <Button
        w="180px"
        h="44px"
        mb="10px"
        ml="20px"
        colorScheme="shadow"
        variant="outline"
      >
        Create Item
      </Button>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12}>
        {renderItems()}
      </SimpleGrid>
      <Paginator
        count={count}
        currentPage={currentPage}
        updatePage={updatePage}
        disabled={items.query.isPreviousData}
      />
    </Box>
  )
}

export default Items
