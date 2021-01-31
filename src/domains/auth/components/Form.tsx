import React from 'react'
import { Box, Center, Heading, VStack } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
  heading: string
  onSubmit: any
}

function Form({ children, heading, onSubmit }: Props): JSX.Element {
  return (
    <VStack
      minW="55%"
      bg="light.300"
      rounded="md"
      boxShadow="inner"
      color="white.50"
      as="form"
      onSubmit={onSubmit}
    >
      <Box width="94%" my="7">
        <Center>
          <Heading
            color="dark.800"
            fontWeight="light"
            fontSize={{ md: '32px', lg: '32px', base: '18px' }}
          >
            {heading}
          </Heading>
        </Center>
      </Box>
      {children}
    </VStack>
  )
}

export default Form
