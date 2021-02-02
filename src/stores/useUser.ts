import create, { State } from 'zustand'

import { IUser, IAccount } from '../types'

interface IStore extends State {
  token: string
  user: IUser | null
  loading: boolean

  setUser: (user: IUser) => void
  setToken: (token: string) => void
  setLoading: (value: boolean) => void
  setAccount: (account: IAccount) => void
}

export const useUser = create<IStore>((set) => ({
  token: '',
  user: null,
  loading: true,

  setLoading: (value: boolean) => set(() => ({ loading: value })),
  setUser: (user: IUser) => set(() => ({ user: user })),
  setToken: (token: string) => set(() => ({ token })),
  setAccount: (account: IAccount) =>
    set((state) => {
      if (state.user) {
        return {
          ...state,
          user: {
            ...state.user,
            account: account,
          },
        }
      }
      return state
    }),
}))
