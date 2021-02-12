import {
  VStack,
  Box,
  Center,
  Text,
  Button,
  useDisclosure,
  Input,
  SlideFade,
} from '@chakra-ui/react'
import { useFormik } from 'formik'

import { useUser } from '../../stores'
import { useUpdateAccount } from '../../hooks'

interface IForm {
  firstName: string
  lastName: string
}

export default function Account() {
  const updateAccount = useUpdateAccount()
  const account = useUser((state) => state.user?.account)
  const editBtn = useDisclosure()
  const formik = useFormik<IForm>({
    initialValues: {
      firstName: account?.firstName || '',
      lastName: account?.lastName || '',
    },
    onSubmit: (data) => {
      updateAccount.mutate({
        first_name: data.firstName,
        last_name: data.lastName,
      })
    },
  })

  const renderCenterBox = (
    label: string,
    key: string,
    value: string
  ): JSX.Element => {
    return (
      <Box width="94%" my="7">
        <Center>
          <Box
            width="30%"
            background="light.700"
            roundedTopLeft="md"
            roundedBottomLeft="md"
            p={2}
          >
            <Text fontSize="2xl" color="dark.900" fontWeight="bolder">
              {label}
            </Text>
          </Box>
          <Box
            width="50%"
            background="light.500"
            roundedTopRight="md"
            roundedBottomRight="md"
            p={2}
          >
            {!editBtn.isOpen ? (
              <Text fontSize="2xl" color="dark.900" fontWeight="bolder">
                {value}
              </Text>
            ) : (
              <Input
                color="dark.900"
                type="text"
                name={key}
                value={formik.values[key]}
                onChange={formik.handleChange}
                disabled={updateAccount.mutation.isLoading}
              />
            )}
          </Box>
        </Center>
      </Box>
    )
  }

  return (
    <Center my={10}>
      <VStack
        minW="58%"
        bg="light.300"
        rounded="lg"
        boxShadow="inner"
        color="white.50"
      >
        <Box width="94%" my="7">
          <Center>
            <Text fontSize="3xl" color="shadow.700">
              Account Information
            </Text>
          </Center>
        </Box>
        {renderCenterBox('First Name', 'firstName', account?.firstName!)}
        {renderCenterBox('Last Name', 'lastName', account?.lastName!)}
        <Box width="94%" my="7">
          <SlideFade in={!editBtn.isOpen} offsetY="20px">
            {!editBtn.isOpen && (
              <Center ml="auto">
                <Box width="50%"></Box>
                <Button
                  width="30%"
                  colorScheme="light"
                  onClick={() => {
                    editBtn.onToggle()
                  }}
                >
                  Edit
                </Button>
              </Center>
            )}
          </SlideFade>
          <SlideFade in={editBtn.isOpen} offsetY="20px">
            {editBtn.isOpen && (
              <Center ml="auto">
                <Box width="20%"></Box>
                <Button
                  width="30%"
                  colorScheme="shadow"
                  onClick={() => {
                    editBtn.onToggle()
                  }}
                  marginRight="5px"
                  isLoading={updateAccount.mutation.isLoading}
                >
                  Cancel
                </Button>
                <Button
                  width="30%"
                  colorScheme="light"
                  onClick={() => {
                    formik.handleSubmit()
                    editBtn.onToggle()
                  }}
                  isLoading={updateAccount.mutation.isLoading}
                >
                  Update
                </Button>
              </Center>
            )}
          </SlideFade>
        </Box>
      </VStack>
    </Center>
  )
}
