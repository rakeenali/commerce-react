import { Box, Center, Grid, Spinner } from '@chakra-ui/react'
import React from 'react'

type Props = {
  loading: boolean
  children: React.ReactNode
}

function Loader({ loading, children }: Props) {
  if (loading) {
    return (
      <Box mt="12" width={{ md: '70%', sm: '90%' }} mx="auto">
        <Grid templateColumns="1fr">
          <Center>
            <Spinner
              thickness="8px"
              speed="0.65s"
              color="dark.2"
              height="250px"
              width="250px"
            />
          </Center>
        </Grid>
      </Box>
    )
  }

  return <>{children}</>
}

export default Loader
