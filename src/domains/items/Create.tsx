import { Box, Button, Icon } from '@chakra-ui/react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { Formik, Form as FormikForm, FieldArray } from 'formik'

import Input from '../../components/Input'
import Form from '../../components/Form'
import { useTags } from '../../hooks'
import TagsCreate from './components/Tags.Create'

function Create() {
  const { data: tags } = useTags()

  const onSubmit = (values) => {
    console.log(JSON.stringify(values))
  }

  const initialValues = {
    images: [{ url: '' }],
    tags: [],
  }

  return (
    <Box m="8" bg="shadow.700" w="70%" mx="auto">
      <Form onSubmit={() => {}} as="div">
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
                onChange={() => {}}
                type="text"
              />
              <Input heading="SKU" name="sku" onChange={() => {}} type="text" />
              <Input
                heading="Price"
                name="price"
                onChange={() => {}}
                type="text"
              />
              <FieldArray name="images">
                {({ insert, remove, push }) => (
                  <Box w="100%" h="100%" ml="50px">
                    <Box w="100%" h="100%">
                      <Button
                        leftIcon={<AddIcon />}
                        colorScheme="light"
                        size="sm"
                        onClick={() => {
                          push({ url: '' })
                        }}
                        disabled={values.images.length > 4}
                      >
                        Add Images
                      </Button>
                    </Box>
                    {values.images.length > 0 &&
                      values.images.map((image, index) => (
                        <Box position="relative">
                          <Input
                            heading={`Image ${index + 1}`}
                            name={`images.${index}.url`}
                            onChange={() => {}}
                            type="text"
                          />
                          <Box
                            position="absolute"
                            w="50px"
                            h="40px"
                            bottom="2px"
                            right="0px"
                            as="button"
                            onClick={() => {
                              remove(index)
                            }}
                            disabled={values.images.length === 1}
                          >
                            <Icon
                              as={CloseIcon}
                              w="16px"
                              h="16px"
                              color="dark.600"
                            />
                          </Box>
                        </Box>
                      ))}
                  </Box>
                )}
              </FieldArray>
              {tags && (
                <TagsCreate setValues={setValues} values={values} tags={tags} />
              )}
              <Input
                heading="Description"
                name="description"
                onChange={() => {}}
                type="text"
              />
              <button type="submit">Submit</button>
            </FormikForm>
          )}
        </Formik>
        <br />
        <br />
      </Form>
    </Box>
  )
}

export default Create
