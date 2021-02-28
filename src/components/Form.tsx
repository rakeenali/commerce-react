import { VStack, As } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: React.ReactNode
  onSubmit: () => void
  as?: As
}

function Form({ children, onSubmit, as }: Props) {
  return (
    <VStack
      w="100%"
      h="100%"
      bg="light.300"
      rounded="md"
      boxShadow="inner"
      color="white.50"
      as={as}
      onSubmit={onSubmit}
    >
      {children}
    </VStack>
  )
}

export default Form
