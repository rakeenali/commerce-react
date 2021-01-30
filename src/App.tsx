import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import Navbar from './components/Navbar'

const theme = extendTheme({
  colors: {
    dark: '#3f0d12',
    crimson: '#a71d31',
    grey: '#f1f0cc',
    light: '#d5bf86',
    shadow: '#8d775f',
    white: '#fff',
    black: '#000',
  },
})

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Navbar />
    </ChakraProvider>
  )
}

export default App
