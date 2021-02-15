import { okResponse } from './common'
import { IItem } from './items'

export interface ITag {
  createdAt: string
  id: number
  items: IItem[] | null
  name: string
  totalItems: number
  updateAt: string
}

export interface IRespTagList extends okResponse {
  data: ITag[]
}

export interface IRespTagDetail extends okResponse {
  data: ITag
}

export interface IRespTagCreate extends okResponse {
  data: ITag
}
