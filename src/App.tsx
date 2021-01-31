import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Heading } from '@chakra-ui/react'

import useAuth from './hooks/useAuth'

function App(): JSX.Element {
  const auth = useAuth()

  useEffect(() => {
    auth.query.refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const render = () => {
    if (auth.query.isFetching) {
      return <Heading>Loading</Heading>
    }

    return <></>
  }

  return (
    <>
      <Navbar />
      {render()}
    </>
  )
}

export default App
