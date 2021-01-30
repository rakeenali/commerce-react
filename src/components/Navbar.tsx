import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex p="2" bg="grey">
      <Box p="2">
        <Heading size="md" color="black">
          Commerce
        </Heading>
      </Box>
      <Spacer />
      <Box>Sign Up</Box>
    </Flex>
  )
}

export default Navbar
