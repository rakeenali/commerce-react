import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

import Router from './Router'
import App from './App'
import Chakra from './Chakra'

const client = new QueryClient()

type Props = {
  children: React.ReactNode
}

function Provider({ children }: Props): JSX.Element {
  return (
    <Chakra>
      <QueryClientProvider client={client}>
        <Router>{children}</Router>
      </QueryClientProvider>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Chakra>
  )
}

export default Provider
