import { Box, Container, HStack, Text, Center, Button } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

function Action() {
  return (
    <>
      <Box w="100%" h="35%">
        <Container>
          <HStack>
            <Text fontSize="2xl" color="dark.600" mr="10px">
              Quantity:
            </Text>
            <Box
              h="32px"
              borderRadius="8px"
              w="32px"
              as="button"
              mr="8px"
              bg="dark.600"
            >
              <MinusIcon w="14px" h="14px" color="#fff" />
            </Box>
            <Box
              h="36px"
              w="36px"
              borderRadius="3px"
              as="button"
              mr="8px"
              bg="#fff"
              color="#000"
            >
              20
            </Box>
            <Box
              h="32px"
              borderRadius="8px"
              w="32px"
              as="button"
              mr="8px"
              bg="dark.600"
            >
              <AddIcon w="14px" h="14px" color="#fff" />
            </Box>
          </HStack>
        </Container>
      </Box>
      <Box w="100%" h="15%">
        <Center>
          <Button colorScheme="light" h="45px" w="42%" mx="10px">
            Add To Cart
          </Button>
          <Button colorScheme="shadow" h="45px" w="42%" mx="10px">
            Buy Now
          </Button>
        </Center>
      </Box>
    </>
  )
}

export default Action
