import { useState, useEffect } from 'react'
import { Box, HStack, Button, Input, SlideFade } from '@chakra-ui/react'

import { ITag } from '../../../types'

type Props = {
  isOpen: boolean
  tag: ITag
  onUpdate: (tag: ITag) => void
}

export default function Edit({ isOpen, onUpdate, tag }: Props): JSX.Element {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    if (tag && tag.name) {
      setName(tag.name)
    } else {
      setName('')
    }
  }, [tag])

  const onChange = (e) => {
    setName(e.target.value)
  }

  return (
    <SlideFade in={isOpen} offsetY="25px">
      <HStack w="100%" h="40px">
        <Box h="100%" width="300px" ml="auto">
          <Input
            width="100%"
            height="100%"
            bg="light.800"
            px="3"
            value={name}
            onChange={onChange}
          />
        </Box>
        <Box h="100%" width="110px">
          <Button
            colorScheme="light"
            width="100%"
            height="100%"
            onClick={() => {
              onUpdate({
                ...tag,
                name,
              })
            }}
          >
            Update
          </Button>
        </Box>
      </HStack>
    </SlideFade>
  )
}
