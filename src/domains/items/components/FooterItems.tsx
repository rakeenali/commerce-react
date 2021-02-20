import { Box, Image, Text } from '@chakra-ui/react'

function FooterItems() {
  return (
    <Box
      w="100%"
      h="160px"
      bg="dark.900"
      position="relative"
      borderTopRadius="12px"
    >
      <Image
        w="100%"
        h="160px"
        objectFit="fill"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        borderTopRadius="12px"
        boxShadow="inner"
      />
      <Box
        position="absolute"
        left="0"
        bottom="0"
        h="100%"
        w="100%"
        bg="shadow.800"
        opacity=".5"
      />
      <Box
        position="absolute"
        left="0"
        bottom="0"
        h="50px"
        w="100%"
        bg="dark.800"
        opacity=".8"
        justifyContent="center"
        alignItems="center"
        display="flex"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        as="button"
      >
        <Text fontSize="lg" fontWeight="bolder" color="dark.50">
          name of the item
        </Text>
      </Box>
    </Box>
  )
}

export default FooterItems
