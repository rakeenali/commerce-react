import { AxiosResponse } from 'axios'
import { useQueryClient } from 'react-query'
import { post } from '../api'

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
      post('tags/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onMutate: async (newTag) => {
        await queryClient.cancelQueries('tags')

        const prevTags = (await queryClient.getQueryData(
          'tags'
        )) as AxiosResponse<IRespTagList>

        const newTags = prevTags
        newTags.data.data[newTags.data.data.length + 1] = {
          ...newTag,
          id: newTags.data.data.length + 1,
        } as ITag

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
