import { useState, useEffect } from 'react'
import { SimpleGrid, Box, HStack, Text } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import Item from './components/Item'
import { useQuery } from '../../hooks'

function Items() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const query = useQuery()

  useEffect(() => {
    const page = query.get('page')
    console.log('page', page)
    if (page) {
    }
  }, [query])

  return (
    <Box m="8">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </SimpleGrid>
      <HStack w="100%" h="auto" mt="26px">
        <Box
          h="30px"
          w="30px"
          ml="auto"
          as="button"
          _hover={{
            transform: `translateX(-.8px)`,
          }}
          _active={{
            transform: `translateX(0px)`,
          }}
        >
          <ChevronLeftIcon w="30px" h="30px" />
        </Box>
        <Text fontSize="sm" fontWeight="bolder">
          1 / 6
        </Text>
        <Box
          h="30px"
          w="30px"
          as="button"
          _hover={{
            transform: `translateX(.8px)`,
          }}
          _active={{
            transform: `translateX(0px)`,
          }}
        >
          <ChevronRightIcon w="30px" h="30px" />
        </Box>
      </HStack>
    </Box>
  )
}

export default Items
