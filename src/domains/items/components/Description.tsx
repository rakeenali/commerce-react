import { Box, Container, Text } from '@chakra-ui/react'

function Description() {
  return (
    <Box w="100%" h="50%" m="auto">
      <Container color="dark.900" h="50%" pt="20">
        <Text fontSize="3xl" fontWeight="bolder" color="dark.500">
          Title title title
        </Text>
        <Text fontSize="3xl" color="dark.300">
          RS. 238
        </Text>
      </Container>
    </Box>
  )
}

export default Description
