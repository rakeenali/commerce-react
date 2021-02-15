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

function Item() {
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
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          boxShadow="inner"
        />
        <Container mt="2px">
          <Text fontSize="3xl" color="white.300" fontWeight="bolder">
            Title title title
          </Text>
          <Text color="white.100" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ad
            porro quo, possimus nostrum temporibus ea voluptate maxime! Quia,
            ex?...
          </Text>
          <HStack mt="10px">
            <Text fontSize="xl" ml="auto" color="white.300" fontWeight="bolder">
              Price:
            </Text>
            <Tag size="md" ml="3px" variant="solid" colorScheme="light">
              500
            </Tag>
          </HStack>
          <Button colorScheme="shadow" w="100%" h="40px" mt="18px" mb="12px">
            See Details
          </Button>
        </Container>
      </Box>
    </Center>
  )
}

export default Item