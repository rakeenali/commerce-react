import { useState } from 'react'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  FormHelperText,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from '@chakra-ui/react'

type Props = {
  create: (name: string) => void
  isLoading: boolean
  error: string
  success: string
  addClose: () => void
}

function Add({
  create,
  error,
  isLoading,
  success,
  addClose,
}: Props): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState<string>('')

  const onSubmit = (): void => {
    create(name)
    setName('')
  }

  const onChange = (e): void => setName(e.target.value)

  const closeModal = (): void => {
    setName('')
    addClose()
    onClose()
  }

  const helperColor = success ? 'grey.500' : error ? 'crimson.700' : ''

  return (
    <>
      <Box w="20%" h="40px" mr="auto">
        <Button colorScheme="crimson" w="100px" onClick={onOpen}>
          Add
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgColor="shadow.600" textAlign="center" fontWeight="900">
            Add a new tag
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} bgColor="shadow.600">
            <FormControl>
              <FormLabel>Tag</FormLabel>
              <Input
                disabled={isLoading}
                placeholder="Enter Here"
                value={name}
                onChange={onChange}
              />
            </FormControl>
            <FormHelperText
              color={helperColor}
              fontWeight="bolder"
              mt="2"
              ml="1"
            >
              {success || error}
            </FormHelperText>
          </ModalBody>

          <ModalFooter bgColor="shadow.600">
            <Button
              colorScheme="shadow"
              mr={3}
              isLoading={isLoading}
              onClick={onSubmit}
            >
              Create
            </Button>
            <Button
              onClick={closeModal}
              colorScheme="crimson"
              isLoading={isLoading}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Add
