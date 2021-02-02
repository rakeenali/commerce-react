import { useEffect } from 'react'
import Navbar from './components/Navbar'

import { useAuth } from './hooks'

function App(): JSX.Element {
  const auth = useAuth()

  useEffect(() => {
    auth.query.refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
