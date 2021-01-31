import { Link } from 'react-router-dom'
import { Flex, Box, Heading, Spacer, Center, Button } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex p="2" bg="white.300">
      <Box p="2">
        <Heading size="md" color="dark.800">
          Commerce
        </Heading>
      </Box>
      <Spacer />
      <Center mx={2}>
        <Box>
          <Button
            variant="ghost"
            colorScheme="white"
            as={Link}
            to="/auth/login"
          >
            Login
          </Button>
        </Box>
      </Center>
      <Center mx={2}>
        <Box>
          <Button
            variant="ghost"
            colorScheme="white"
            as={Link}
            to="/auth/register"
          >
            Register
          </Button>
        </Box>
      </Center>
    </Flex>
  )
}

export default Navbar
