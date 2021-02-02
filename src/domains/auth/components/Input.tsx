import React from 'react'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as CInput,
  FormHelperText,
} from '@chakra-ui/react'

type Props = {
  name: string
  heading: string
  onChange: (e) => void
  helperText?: string
  errorText?: string
  type?: string
  disabled?: boolean
}

function Input({
  onChange,
  name,
  heading,

  // defaults
  type = 'text',
  helperText = '',
  errorText = '',
  disabled = false,
}: Props): JSX.Element {
  //
  return (
    <Box width="94%" my="7">
      <FormControl id={name}>
        <FormLabel color="shadow.800" fontWeight="900">
          {heading}
        </FormLabel>
        <CInput
          size="md"
          background="light.600"
          focusBorderColor="light.600"
          placeholder={heading}
          type={type}
          name={name}
          onChange={onChange}
          disabled={disabled}
        />
        {helperText && (
          <FormHelperText color="shadow.700">{helperText}</FormHelperText>
        )}
        {errorText && (
          <FormHelperText color="crimson.500" fontWeight="bolder">
            {errorText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}

export default Input
