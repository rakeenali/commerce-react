import { Text } from '@chakra-ui/react'

type Props = {
  description: string
}

function Detail({ description }: Props) {
  return (
    <Text fontSize="xl" color="shadow.700" fontWeight="bolder" p="8">
      {description}
    </Text>
  )
}

export default Detail
