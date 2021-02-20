import React from 'react'
import { Image as CImage } from '@chakra-ui/react'

type Props = {
  url: string
  alt: string
}

function Image({ url, alt }: Props) {
  return (
    <CImage
      w="100%"
      h="100%"
      objectFit="fill"
      borderTopLeftRadius="20px"
      borderBottomLeftRadius="20px"
      src={url}
      alt={alt}
    />
  )
}

export default Image
