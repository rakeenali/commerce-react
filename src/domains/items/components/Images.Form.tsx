import { Box, Button, Icon } from '@chakra-ui/react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'

import Input from '../../../components/Input'

type Props = {
  values: any
  setValues: (
    values: React.SetStateAction<any>,
    shouldValidate?: boolean
  ) => void
  push: (value: any) => void
  remove: (value: number) => void
}

function ImagesForm({ values, push, remove, setValues }: Props) {
  const onChange = (value, index) => {
    const images = values.images
    images[index] = value
    setValues({
      ...values,
      images,
    })
  }

  return (
    <>
      <Box w="100%" h="100%" ml="50px">
        <Box w="100%" h="100%">
          <Button
            leftIcon={<AddIcon />}
            colorScheme="light"
            size="sm"
            onClick={() => {
              push('')
            }}
            disabled={values.images.length > 4}
          >
            Add Images
          </Button>
        </Box>
        {values.images.length > 0 &&
          values.images.map((_image, index) => (
            <Box position="relative" key={`form-image-${index}`}>
              <Input
                heading={`Image ${index + 1}`}
                name={`images.${index}.url`}
                onChange={(e) => onChange(e.target.value, index)}
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
                <Icon as={CloseIcon} w="16px" h="16px" color="dark.600" />
              </Box>
            </Box>
          ))}
      </Box>
    </>
  )
}

export default ImagesForm
