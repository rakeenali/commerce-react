import { Box, Container, HStack, Text, Center, Button } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import { useUser } from '../../../stores'

function Action() {
  const isAdmin = useUser((state) => state.admin)

  const renderUserControl = (): JSX.Element => {
    return (
      <>
        <Button colorScheme="light" h="45px" w="42%" mx="10px">
          Add To Cart
        </Button>
        <Button colorScheme="shadow" h="45px" w="42%" mx="10px">
          Buy Now
        </Button>
      </>
    )
  }

  const renderAdminControl = (): JSX.Element => {
    return (
      <>
        <Button colorScheme="light" h="45px" w="42%" mx="10px">
          Update
        </Button>
        <Button colorScheme="shadow" h="45px" w="42%" mx="10px">
          Delete
        </Button>
      </>
    )
  }

  return (
    <>
      {!isAdmin && (
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
      )}
      <Box w="100%" h="15%">
        <Center>{isAdmin ? renderAdminControl() : renderUserControl()}</Center>
      </Box>
    </>
  )
}

export default Action
