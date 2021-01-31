import { useFormik } from 'formik'
import { Box, Button, Center } from '@chakra-ui/react'
import * as Yup from 'yup'

import Input from './components/Input'
import Form from './components/Form'

type IFormInput = {
  username: string
  password: string
}

const schema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username is too short')
    .max(20, 'Username is too long')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .max(32, 'Password is too long')
    .required('Password is required'),
})

function Login() {
  const onSubmit = (values: IFormInput) => {}

  const formik = useFormik<IFormInput>({
    initialValues: {
      username: '',
      password: '',
    },
    isInitialValid: true,
    validationSchema: schema,
    onSubmit: onSubmit,
  })

  return (
    <Center my={10}>
      <Form heading="Login" onSubmit={formik.handleSubmit}>
        <Input
          name="username"
          heading="User Name"
          onChange={formik.handleChange}
          errorText={formik.errors.username}
        />
        <Input
          name="password"
          heading="Password"
          type="password"
          onChange={formik.handleChange}
          errorText={formik.errors.password}
        />
        <Box width="94%" my="7">
          <Button colorScheme="light" type="submit" width="100%">
            Login
          </Button>
        </Box>
      </Form>
    </Center>
  )
}

export default Login
