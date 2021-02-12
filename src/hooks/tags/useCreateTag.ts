import axios from 'axios'
import { useQueryClient } from 'react-query'

import useMutation from '../useMutation'
import { IRespTagDetail, IRespTagList, ITag } from '../../types'
import { useUser } from '../../stores'

type Variables = {
  name: string
}

export function useCreateTag() {
  const token = useUser((state) => state.token)

  const queryClient = useQueryClient()

  const tag = useMutation<IRespTagDetail, Variables>(
    (data) =>
      axios.post(`${process.env.REACT_APP_BASE_URL}/tags/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onMutate: async (newTag) => {
        await queryClient.cancelQueries('tags')

        const prevTags = (await queryClient.getQueryData(
          'tags'
        )) as IRespTagList

        const newTags = prevTags
        newTags.data[(newTags.data.length = 1)] = newTag as ITag

        queryClient.setQueryData('tags', newTags)

        return { prevTags }
      },
      onError: (_err, _newTag, context) => {
        queryClient.setQueryData('tags', context.prevTags)
      },
      onSettled: () => {
        queryClient.invalidateQueries('tags')
      },
    }
  )

  const createTag = (variables: Variables): void => {
    tag.mutate(variables)
    return
  }

  return { tag, createTag }
}
