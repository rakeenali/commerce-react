import { Link } from 'react-router-dom'
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Center,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { useUser } from '../stores'
import React from 'react'

function Navbar() {
  const user = useUser((state) => state.user)
  const loading = useUser((state) => state.loading)

  const renderMenu = (): JSX.Element => {
    return (
      <Center mx={2}>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              colorScheme="white"
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/accounts" color="shadow.900">
                {user?.username}
              </MenuItem>
              <MenuItem as={Button} variant="ghost" color="shadow.900">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Center>
    )
  }

  const renderNav = () => {
    if (loading) {
      return <></>
    }

    if (user) {
      return (
        <>
          <Center mx={2}>
            <Box>
              <Button variant="ghost" colorScheme="white" as={Link} to="/tags">
                Tags
              </Button>
            </Box>
            {renderMenu()}
          </Center>
        </>
      )
    } else {
      return (
        <>
          <Center mx={2}>
            <Box>
              <Button
                variant="ghost"
                colorScheme="white"
                as={Link}
                to="/auth/login"
              >
                Login
              </Button>
            </Box>
          </Center>
          <Center mx={2}>
            <Box>
              <Button
                variant="ghost"
                colorScheme="white"
                as={Link}
                to="/auth/register"
              >
                Register
              </Button>
            </Box>
          </Center>
        </>
      )
    }
  }

  return (
    <Flex p="2" bg="white.300">
      <Box p="2">
        <Heading size="md" color="dark.800">
          Commerce
        </Heading>
      </Box>
      <Spacer />
      {renderNav()}
    </Flex>
  )
}

export default Navbar
