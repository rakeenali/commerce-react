import { Box, Container, Text } from '@chakra-ui/react'
import { IItem } from '../../../types'

type Props = {
  item: IItem
}

function Description({ item }: Props) {
  return (
    <Box w="100%" h="50%" m="auto">
      <Container color="dark.900" h="50%" pt="20">
        <Text fontSize="3xl" fontWeight="bolder" color="dark.500">
          {item.name}
        </Text>
        <Text fontSize="3xl" color="dark.300">
          RS. {item.price}
        </Text>
      </Container>
    </Box>
  )
}

export default Description
