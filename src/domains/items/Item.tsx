import { Box, Grid, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import Description from './components/Description'
import Action from './components/Action'
import Detail from './components/Detail'
import Carousel from './components/Carousel'
import FooterItems from './components/FooterItems'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

import { useItem } from '../../hooks'

function Item() {
  const { id } = useParams<{ id: string }>()
  const item = useItem(Number(id))

  const renderItem = (): JSX.Element => {
    const data = item.data?.data
    if (!data) {
      return <Error error="Item not found" />
    }
    return (
      <>
        <Grid
          templateColumns={{ md: '1.3fr 1fr', sm: '1fr' }}
          gridGap="20px"
          bg="shadow.50"
          boxShadow="inner"
          borderRadius="20px"
        >
          <Box w="100%" h="450px">
            <Carousel item={data} />
          </Box>
          <Box w="100%" h="450px">
            <Description item={data} />
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
          <Detail description={data.description} />
        </Box>
        <Box w="auto" h="auto" mt="12">
          <Text fontSize="xl" fontWeight="bolder" textAlign="center">
            Products you may like
          </Text>
          <Grid
            templateColumns={{
              sm: '1fr',
              md: 'repeat(3,1fr)',
              lg: 'repeat(4,1fr)',
            }}
            gridGap="20px"
            mt="5"
          >
            <FooterItems />
          </Grid>
        </Box>
      </>
    )
  }

  return (
    <Box mt="6" width={{ md: '70%', sm: '90%' }} mx="auto">
      <Loader loading={item.query.isLoading}>
        <Error error={item.error}>{renderItem()}</Error>
      </Loader>
    </Box>
  )
}

export default Item
