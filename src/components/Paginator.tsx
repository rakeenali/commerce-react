import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { HStack, Box, Text } from '@chakra-ui/react'

type Props = {
  currentPage: number
  count: number

  updatePage(page: number): void

  disabled?: boolean
}

function Paginator({
  currentPage,
  count,
  updatePage,
  disabled = false,
}: Props) {
  return (
    <HStack w="100%" h="auto" mt="16">
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
          disabled={disabled}
        >
          <ChevronLeftIcon w="30px" h="30px" color="light.400" />
        </Box>
      )}
      <Text fontSize="sm" fontWeight="bolder" color="light.200" ml="auto">
        {currentPage} / {count}
      </Text>
      {count > currentPage ? (
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
          disabled={disabled}
        >
          <ChevronRightIcon w="30px" h="30px" color="light.400" />
        </Box>
      ) : (
        <Box h="30px" w="30px" ml="auto"></Box>
      )}
    </HStack>
  )
}

export default Paginator
