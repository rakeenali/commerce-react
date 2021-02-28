import { useState } from 'react'
import { Image, Box } from '@chakra-ui/react'
import { IItem } from '../../../types'

type Props = {
  item: IItem
}

function Carousel({ item }: Props): JSX.Element {
  const [selectedImage, setSelectedImage] = useState(item.images[0])

  const renderImage = (): JSX.Element => {
    return (
      <Image
        w="100%"
        h="100%"
        objectFit="fill"
        borderTopLeftRadius="20px"
        borderBottomLeftRadius="20px"
        src={selectedImage.url}
        alt={item.name}
      />
    )
  }

  const renderFooter = (): JSX.Element[] => {
    const width = Math.min(Math.floor(100 / item.images.length) - 3, 65)
    return item.images.map((image) => {
      return (
        <Image
          m="auto"
          key={image.id}
          w={`${width}%`}
          boxShadow={image.id === selectedImage.id ? 'outline' : 'inner'}
          h="65%"
          borderRadius="8px"
          objectFit="fill"
          src={image.url}
          alt={item.name}
          cursor="pointer"
          _hover={{ transform: 'scale(1.06)', transition: 'all .1s ease-in' }}
          onClick={() => setSelectedImage(image)}
          __css={{
            transform:
              image.id === selectedImage.id ? 'scale(1.06)' : 'scale(1)',
          }}
        />
      )
    })
  }

  return (
    <Box w="100%" h="100%" position="relative">
      {renderImage()}
      <Box
        position="absolute"
        w="100%"
        h="25%"
        bg="rgba(0,0,0,.75)"
        bottom="0px"
        left="0px"
        d="flex"
        borderBottomLeftRadius="20px"
        p="8px"
      >
        {renderFooter()}
      </Box>
    </Box>
  )
}

export default Carousel
