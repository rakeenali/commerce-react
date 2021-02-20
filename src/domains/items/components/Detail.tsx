import { Text } from '@chakra-ui/react'

type Props = {
  description: string
}

function Detail({ description }: Props) {
  return (
    <Text fontSize="xl" color="shadow.700" fontWeight="bolder" p="8">
      {description}Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Pariatur sapiente sint debitis, esse cumque sequi in, dolor eaque cum
      nobis minus laudantium mollitia. Similique, architecto. Ipsa rerum, sed
      odit tempore quisquam recusandae excepturi atque. Nam aut asperiores
      sapiente quos fuga rerum facere pariatur. Alias eveniet, ullam similique
      ipsa ut molestias illo amet reprehenderit soluta dicta quam repellendus
      vel error laborum suscipit blanditiis. Sint incidunt exercitationem
      suscipit officiis ullam commodi? Accusamus nostrum velit magni laborum
      quisquam dignissimos debitis dolore maxime est veniam eum nulla
      exercitationem, voluptate voluptatibus libero. Laudantium asperiores in
      numquam. Repellendus facilis obcaecati tenetur, quaerat voluptatibus minus
      voluptatum molestias?
    </Text>
  )
}

export default Detail
