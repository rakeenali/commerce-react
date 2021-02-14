import { useState } from 'react'
import { Box, SimpleGrid, useDisclosure, HStack } from '@chakra-ui/react'

import Tag from './components/Tag'
import Edit from './components/Edit'
import Add from './components/Add'

import { ITag } from '../../types'
import { useTags, useCreateTag, useUpdateTag } from '../../hooks'

export default function List(): JSX.Element {
  const [tagSelected, setTagSelected] = useState<ITag | null>(null)
  const editBtn = useDisclosure({
    onClose: () => {
      setTagSelected(null)
    },
  })
  const tags = useTags()
  const { createTag: mutationCreateTag, tag } = useCreateTag()
  const { updateTag } = useUpdateTag()

  const onUpdate = (tag: ITag) => {
    editBtn.onClose()
    console.log('herer')
    updateTag({ id: tag.id, name: tag.name })
  }

  const onClick = (tag: ITag) => {
    setTagSelected(tag)
    editBtn.onOpen()
  }

  const createTag = (name: string): void => {
    mutationCreateTag({ name })
  }

  const addClose = (): void => {
    tag.mutation.reset()
  }

  // renderers
  const renderTags = (): JSX.Element[] | JSX.Element => {
    if (tags.data) {
      const { data } = tags.data
      if (data.length <= 0) {
        return <></>
      }
      return data.map((d) => <Tag tag={d} onClick={onClick} key={d.id} />)
    }
    return <></>
  }

  const errorMessage = tag.error || ''
  const successMessage = tag.mutation.isSuccess ? tag.data?.message || '' : ''

  return (
    <Box maxW="85%" my="10" mx="auto" position="relative">
      <HStack w="100%" mb="5">
        <Add
          create={createTag}
          isLoading={tag.mutation.isLoading}
          error={errorMessage}
          success={successMessage}
          addClose={addClose}
        />
        <Edit isOpen={editBtn.isOpen} onUpdate={onUpdate} tag={tagSelected!} />
      </HStack>
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
    </Box>
  )
}
