import create, { State } from 'zustand'

import { IUser } from '../types'

interface IStore extends State {
  token: string
  user: IUser | null
  loading: boolean

  setUser: (user: IUser) => void
  setToken: (token: string) => void
  setLoading: (value: boolean) => void
}

export const useUser = create<IStore>((set) => ({
  token: '',
  user: null,
  loading: true,

  setLoading: (value: boolean) => set(() => ({ loading: value })),
  setUser: (user: IUser) => set(() => ({ user: user })),
  setToken: (token: string) => set(() => ({ token })),
}))
