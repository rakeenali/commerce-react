import axios, { AxiosResponse } from 'axios'
import { useQueryClient } from 'react-query'

import useMutation from '../useMutation'
import { IRespTagDetail, IRespTagList, ITag } from '../../types'
import { useUser } from '../../stores'

type Variables = {
  name: string
  id: number
}

export function useUpdateTag() {
  const token = useUser((state) => state.token)

  const queryClient = useQueryClient()

  const tag = useMutation<IRespTagDetail, Variables>(
    (data) =>
      axios.patch(
        `${process.env.REACT_APP_BASE_URL}/tags/update/${data.id}`,
        { name: data.name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    {
      onMutate: async (newTag) => {
        await queryClient.cancelQueries('tags')

        const tags = (await queryClient.getQueryData(
          'tags'
        )) as AxiosResponse<IRespTagList>

        tags.data.data = tags.data.data.map((t) => {
          if (t.id === newTag.id) {
            return {
              ...t,
              name: newTag.name,
            }
          }
          return t
        })

        return { tags }
      },
      onError: (_err, _newTag, context) => {
        queryClient.setQueryData('tags', context.tags)
      },
      onSettled: () => {
        queryClient.invalidateQueries('tags')
      },
    }
  )

  const updateTag = (variables: Variables): void => {
    tag.mutate(variables)
    return
  }

  return { tag, updateTag }
}
