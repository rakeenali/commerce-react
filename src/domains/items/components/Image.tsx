import React from 'react'
import { Image as CImage } from '@chakra-ui/react'

function Image() {
  return (
    <CImage
      w="100%"
      h="100%"
      objectFit="fill"
      borderTopLeftRadius="20px"
      borderBottomLeftRadius="20px"
      src="https://bit.ly/dan-abramov"
      alt="Dan Abramov"
    />
  )
}

export default Image
