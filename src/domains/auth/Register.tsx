import { useFormik } from 'formik'
import { Box, Button, Center } from '@chakra-ui/react'
import * as Yup from 'yup'

import Input from './components/Input'
import Form from './components/Form'
import { useSignup } from '../../hooks'

type IFormInput = {
  firstName: string
  lastName: string
  username: string
  password: string
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'First Name is too short')
    .max(20, 'First Name is too long')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Last Name is too short')
    .max(20, 'Last Name is too long')
    .required('Last Name is required'),
  username: Yup.string()
    .min(3, 'Username is too short')
    .max(20, 'Username is too long')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .max(32, 'Password is too long')
    .required('Password is required'),
})

function Register() {
  const { mutate, mutation, getError } = useSignup()

  const onSubmit = (values: IFormInput) => {
    mutate({
      first_name: values.firstName,
      last_name: values.lastName,
      password: values.password,
      username: values.username,
    })
  }

  const formik = useFormik<IFormInput>({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    isInitialValid: true,
    validationSchema: schema,
    onSubmit: onSubmit,
  })

  const heading =
    (mutation.isError && getError().message) || 'Register as a new user'

  return (
    <Center my={10}>
      <Form heading={heading} onSubmit={formik.handleSubmit}>
        <Input
          name="firstName"
          heading="First Name"
          onChange={formik.handleChange}
          errorText={formik.errors.firstName}
          disabled={mutation.isLoading}
        />
        <Input
          name="lastName"
          heading="Last Name"
          onChange={formik.handleChange}
          errorText={formik.errors.lastName}
          disabled={mutation.isLoading}
        />
        <Input
          name="username"
          heading="User Name"
          onChange={formik.handleChange}
          errorText={formik.errors.username}
          disabled={mutation.isLoading}
        />
        <Input
          name="password"
          heading="Password"
          type="password"
          onChange={formik.handleChange}
          errorText={formik.errors.password}
          disabled={mutation.isLoading}
        />
        <Box width="94%" my="7">
          <Button
            colorScheme="light"
            type="submit"
            width="100%"
            isLoading={mutation.isLoading}
          >
            Submit
          </Button>
        </Box>
      </Form>
    </Center>
  )
}

export default Register
