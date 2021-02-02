import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    dark: {
      50: '#ffe8eb',
      100: '#f2c0c5',
      200: '#e7969f',
      300: '#dd6d78',
      400: '#d44552',
      500: '#bb2d38',
      600: '#92232b',
      700: '#69181f',
      800: '#3f0d12',
      900: '#190205',
    },
    grey: {
      50: '#fbf9e6',
      100: '#efedc3',
      200: '#e4e29e',
      300: '#d9d677',
      400: '#ceca52',
      500: '#b4b139',
      600: '#8c892b',
      700: '#64621e',
      800: '#3c3b10',
      900: '#141400',
    },
    light: {
      50: '#fbf5e2',
      100: '#ece1c2',
      200: '#decd9f',
      300: '#d1b97a',
      400: '#c4a556',
      500: '#aa8b3d',
      600: '#856c2e',
      700: '#5f4d20',
      800: '#3a2e10',
      900: '#170e00',
    },
    shadow: {
      50: '#fef0e6',
      100: '#e3d8cc',
      200: '#cec0b0',
      300: '#b8a793',
      400: '#a38d76',
      500: '#89745c',
      600: '#6c5a47',
      700: '#4d4031',
      800: '#30271b',
      900: '#150c00',
    },
    white: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
    crimson: {
      50: '#ffe6eb',
      100: '#f8bcc5',
      200: '#ed919f',
      300: '#e56779',
      400: '#dc3c53',
      500: '#c32439',
      600: '#981a2d',
      700: '#6e1220',
      800: '#430812',
      900: '#1d0004',
    },
  },
  styles: {
    global: {
      body: {
        // backgroundColor: '#000000e6',
        backgroundColor: 'white.800',
        color: 'white.50',
      },
    },
  },
})

type Props = {
  children: React.ReactNode
}

function Chakra({ children }: Props): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export default Chakra
