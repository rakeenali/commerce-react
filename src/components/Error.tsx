import { Text, Grid } from '@chakra-ui/react'
import React from 'react'

type Props = {
  error: string
  children?: React.ReactNode
}

function Error({ error, children }: Props) {
  if (error !== '') {
    return (
      <Grid
        templateColumns="1fr"
        gridGap="20px"
        bg="shadow.50"
        boxShadow="inner"
        borderRadius="20px"
      >
        <Text
          fontSize="2xl"
          color="dark.900"
          textAlign="center"
          p="8"
          fontWeight="bolder"
        >
          {error}
        </Text>
      </Grid>
    )
  }

  return <>{children}</>
}

export default Error
