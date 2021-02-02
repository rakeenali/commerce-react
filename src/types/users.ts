import { okResponse } from './common'

// RESPONSES
export interface IRespCreateUser extends okResponse {
  data: IUser
}

export interface IRespLoginUser extends okResponse {
  data: ILogin | null
}

export interface IRespAuthenticate extends okResponse {
  data: IUser | null
}

export interface IRespAccount extends okResponse {
  data: IAccount | null
}

// INTERFACES

interface IBalance {
  balance: number
  id: number
  updatedOn: Date
}

export interface IAccount {
  firstName: string
  id: number
  lastName: string
  updatedOn: Date
}

export interface IUser {
  account: IAccount
  balance: IBalance | null
  createdAt: Date
  id: number
  role: IRole | null
  username: string
}

interface IRole {
  id: number
  type: string
}

interface ILogin {
  token: string
  user: IUser
}
