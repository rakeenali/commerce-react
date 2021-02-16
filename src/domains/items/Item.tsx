import {
  Box,
  Grid,
  Center,
  Text,
  Container,
  HStack,
  Button,
} from '@chakra-ui/react'

import Image from './components/Image'
import Description from './components/Description'
import Action from './components/Action'
import Detail from './components/Detail'

function Item() {
  return (
    <Box mt="6" width={{ md: '70%', sm: '90%' }} mx="auto">
      <Grid
        templateColumns={{ md: '1.3fr 1fr', sm: '1fr' }}
        gridGap="20px"
        bg="shadow.50"
        boxShadow="inner"
        borderRadius="20px"
      >
        <Box w="100%" h="450px">
          <Image />
        </Box>
        <Box w="100%" h="450px">
          <Description />
          <Action />
        </Box>
      </Grid>
      <Box
        w="100%"
        h="auto"
        bg="shadow.200"
        mt="10"
        borderRadius="20px"
        boxShadow="dark-lg"
      >
        <Detail />
      </Box>
      <Box
        w="100%"
        h="250px"
        bg="shadow.300"
        mt="10"
        borderRadius="20px"
        boxShadow="outline"
      ></Box>
    </Box>
  )
}

export default Item
