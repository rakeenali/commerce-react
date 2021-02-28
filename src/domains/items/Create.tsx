import { useState } from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { Formik, Form as FormikForm, FieldArray } from 'formik'

import TagsCreate from './components/Tags.Create'
import ImagesForm from './components/Images.Form'
import Input from '../../components/Input'
import Form from '../../components/Form'

import { useTags, useCreateItem } from '../../hooks'

type IForm = {
  name: string
  sku: string
  price: string
  description: string
  tags: string[]
  images: string[]
}

function Create() {
  const { data: tags } = useTags()
  const [title, setTitle] = useState<string>('Create an Item')
  const createItem = useCreateItem()

  const onSubmit = (values: IForm) => {
    const isValid = isFormValid(values)
    if (!isValid) {
      setTitle('Invalid form')
      return
    }

    setTitle('Creating an item')
    createItem.create({
      ...values,
      tags: values.tags.map((t) => ({ name: t })),
      price: Number(values.price),
    })
  }

  const initialValues: IForm = {
    images: [''],
    tags: [],
    name: '',
    sku: '',
    price: '',
    description: '',
  }

  const onChange = (value, name, setValues, values) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const isFormValid = (values: IForm) => {
    if (
      values.description === '' ||
      values.name === '' ||
      values.price === '' ||
      values.sku === '' ||
      values.images.length < 2 ||
      values.images[0] === '' ||
      values.images[1] === '' ||
      values.tags.length === 0
    ) {
      return false
    }

    return true
  }

  return (
    <Box m="8" bg="shadow.700" w="70%" mx="auto">
      <Form onSubmit={() => {}} as="div">
        <Text fontWeight="bold" fontSize="3xl" mt="10px" color="shadow.800">
          {title}
        </Text>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, setValues }) => (
            <FormikForm
              style={{
                width: '90%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Input
                heading="Name"
                name="name"
                onChange={(e) =>
                  onChange(e.target.value, 'name', setValues, values)
                }
                type="text"
              />
              <Input
                heading="SKU"
                name="sku"
                onChange={(e) =>
                  onChange(e.target.value, 'sku', setValues, values)
                }
                type="text"
              />
              <Input
                heading="Price"
                name="price"
                onChange={(e) =>
                  onChange(e.target.value, 'price', setValues, values)
                }
                type="number"
              />
              <FieldArray name="images">
                {({ insert, remove, push }) => (
                  <ImagesForm {...{ push, remove, values, setValues }} />
                )}
              </FieldArray>
              {tags && (
                <TagsCreate setValues={setValues} values={values} tags={tags} />
              )}
              <Input
                heading="Description"
                name="description"
                onChange={(e) =>
                  onChange(e.target.value, 'description', setValues, values)
                }
                type="text"
              />
              <Button
                type="submit"
                colorScheme="shadow"
                w="94%"
                mt="20px"
                disabled={createItem.item.mutation.isLoading}
              >
                Submit
              </Button>
            </FormikForm>
          )}
        </Formik>
        <br />
      </Form>
    </Box>
  )
}

export default Create
