import { AlertStatus } from '@chakra-ui/react'
import create, { State } from 'zustand'

interface IStore extends State {
  show: boolean
  title: string

  description?: string
  status?: AlertStatus
  duration?: number

  showToast: (title: string, description?: string, status?: AlertStatus) => void
  hideToast: () => void
}

export const useToast = create<IStore>((set) => ({
  show: false,
  title: '',
  description: '',
  status: 'success',
  duration: 5000,

  showToast: (
    title: string,
    description: string = '',
    status: AlertStatus = 'success'
  ) =>
    set(() => ({
      show: true,
      title,
      description,
      status,
    })),
  hideToast: () =>
    set(() => ({
      show: false,
      title: '',
      description: '',
      status: 'success',
    })),
}))
