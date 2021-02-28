import {
  Box,
  Tag,
  Center,
  Image,
  HStack,
  Button,
  Text,
  Container,
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import { IItem } from '../../../types'

type Props = {
  item: IItem
}

function Item({ item }: Props) {
  const { push } = useHistory()

  const onClick = (): void => {
    push(`/items/${item.id}`)
  }

  return (
    <Center h="auto" w="100%">
      <Box
        h="100%"
        w={{ sm: '100%', md: '90%' }}
        borderRadius="20px"
        bg="shadow.700"
        boxShadow="2xl"
      >
        <Image
          w="100%"
          h="260px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          objectFit="cover"
          src={item.images[0].url}
          alt={item.name}
          boxShadow="inner"
        />
        <Container mt="8px">
          <Text fontSize="3xl" color="white.300" fontWeight="bolder">
            {item.name.substr(0, 20)}
          </Text>
          <Text color="white.100" fontSize="lg">
            {item.description.substr(0, 180)}...
          </Text>
          <HStack mt="15px">
            <Text fontSize="xl" ml="auto" color="white.300" fontWeight="bolder">
              Price:
            </Text>
            <Tag size="md" ml="3px" variant="solid" colorScheme="light">
              {item.price}
            </Tag>
          </HStack>
          <Button
            colorScheme="shadow"
            w="100%"
            h="40px"
            mt="22px"
            mb="16px"
            onClick={onClick}
          >
            See Details
          </Button>
        </Container>
      </Box>
    </Center>
  )
}

export default Item
