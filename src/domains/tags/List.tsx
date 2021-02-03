import { useState } from 'react'
import { Box, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'

import Tag from './components/Tag'
import Edit from './components/Edit'

import { ITag } from '../../types'
import { useTags } from '../../hooks'

export default function List(): JSX.Element {
  const [tagSelected, setTagSelected] = useState<ITag | null>(null)
  const editBtn = useDisclosure({
    onClose: () => {
      setTagSelected(null)
    },
  })
  const tags = useTags()

  const onUpdate = (tag: ITag) => {
    editBtn.onClose()
  }

  const onClick = (tag: ITag) => {
    setTagSelected(tag)
    editBtn.onOpen()
  }

  const renderTags = (): JSX.Element[] | JSX.Element => {
    const { data } = tags.getData()
    if (data.length <= 0) {
      return <></>
    }
    return data.map((d) => <Tag tag={d} onClick={onClick} key={d.id} />)
  }

  return (
    <Box
      maxW="85%"
      minH="calc(100vh - 60px)"
      my="10"
      mx="auto"
      position="relative"
    >
      <Edit isOpen={editBtn.isOpen} onUpdate={onUpdate} tag={tagSelected!} />
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing="20px"
      >
        {tags.query.isSuccess && renderTags()}
      </SimpleGrid>
      <Box
        w="48px"
        h="48px"
        position="absolute"
        bottom="8%"
        right="0%"
        as="button"
        _hover={{
          transform: 'scale(1.03)',
        }}
        _active={{
          transform: 'scale(0.98) rotate(20deg)',
        }}
      >
        <SmallAddIcon height="48px" width="48px" color="dark.300" />
      </Box>
    </Box>
  )
}
