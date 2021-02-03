import { Box, Text, HStack, Center } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import { ITag } from '../../../types'

type Props = {
  tag: ITag
  onClick: (tag: ITag) => void
}

export default function Tag({ tag, onClick }: Props): JSX.Element {
  return (
    <Box
      height="auto"
      width="100%"
      bg="light.100"
      px={5}
      py={1}
      rounded="24px"
      position="relative"
    >
      <Box
        height="30px"
        width="30px"
        position="absolute"
        right="13px"
        as="button"
        _hover={{
          transform: 'scale(1.03)',
        }}
        _active={{
          transform: 'scale(0.98)',
        }}
        onClick={() => onClick(tag)}
      >
        <Center height="100%" width="100%">
          <EditIcon height="70%" width="70%" color="crimson.900" />
        </Center>
      </Box>
      <Text fontSize="4xl" color="crimson.900" fontWeight="bolder">
        {tag.name}
      </Text>
      <HStack spacing="24px" justify="space-between" color="crimson.700">
        <Text fontSize="md" fontWeight="100">
          Total Items: {tag.totalItems}
        </Text>
        <Text fontSize="md" fontWeight="100">
          Updated at: {new Date(tag.updateAt).toDateString()}
        </Text>
      </HStack>
    </Box>
  )
}
