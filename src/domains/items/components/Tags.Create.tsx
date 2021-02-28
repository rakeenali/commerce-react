import React from 'react'
import { Box, Button } from '@chakra-ui/react'

import { IRespTagList, ITag } from '../../../types'

type Props<Values> = {
  tags: IRespTagList
  setValues: (
    values: React.SetStateAction<Values>,
    shouldValidate?: boolean
  ) => void
  values: Values
}

function TagsCreate<Values>({ tags, setValues, values }: Props<Values>) {
  const setTags = (tag: ITag) => {
    //@ts-ignore
    const exist = values.tags.find((t) => t === tag.name)

    if (exist) {
      //@ts-ignore
      const newTags = values.tags.filter((t) => t !== tag.name)
      setValues({
        ...values,
        tags: newTags,
      })
      return
    }

    setValues({
      ...values,
      //@ts-ignore
      tags: [...values.tags, tag.name],
    })
  }

  return (
    <Box w="100%" h="100%" ml="50px">
      {tags.data.map((t) => {
        //@ts-ignore
        const variant = values.tags.includes(t.name) ? 'solid' : 'ghost'
        return (
          <Button
            key={`Tag.${t.id}`}
            size="sm"
            variant={variant}
            colorScheme="white"
            mr="8px"
            mt="3px"
            type="button"
            onClick={() => setTags(t)}
          >
            {t.name}
          </Button>
        )
      })}
    </Box>
  )
}

export default TagsCreate
