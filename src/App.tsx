import { useEffect } from 'react'
import { useToast as toaster } from '@chakra-ui/react'

import Navbar from './components/Navbar'

import { useAuth } from './hooks'
import { useToast } from './stores'

function App(): JSX.Element {
  const auth = useAuth()
  const cToast = toaster()
  const toast = useToast()

  useEffect(() => {
    auth.query.refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const makeToast = () => {
    cToast({
      title: toast.title,
      description: toast.description,
      status: toast.status,
      duration: toast.duration,
      isClosable: true,
      onCloseComplete: () => {
        toast.hideToast()
      },
    })
  }

  useEffect(() => {
    if (toast.show) {
      makeToast()
    }
    console.log(toast)
  }, [toast.show])

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
