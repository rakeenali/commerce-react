import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { HStack, Box, Text } from '@chakra-ui/react'

type Props = {
  currentPage: number
  count: number

  updatePage(page: number): void
}

function Paginator({ currentPage, count, updatePage }: Props) {
  return (
    <HStack w="100%" h="auto" mt="26px">
      {currentPage > 1 && (
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
          onClick={() => updatePage(currentPage - 1)}
        >
          <ChevronLeftIcon w="30px" h="30px" color="light.400" />
        </Box>
      )}
      <Text fontSize="sm" fontWeight="bolder" color="light.200" ml="auto">
        {currentPage} / {count}
      </Text>
      {count > currentPage && (
        <Box
          h="30px"
          w="30px"
          ml="auto"
          as="button"
          _hover={{
            transform: `translateX(.8px)`,
          }}
          _active={{
            transform: `translateX(0px)`,
          }}
          onClick={() => updatePage(currentPage + 1)}
        >
          <ChevronRightIcon w="30px" h="30px" color="light.400" />
        </Box>
      )}
    </HStack>
  )
}

export default Paginator
