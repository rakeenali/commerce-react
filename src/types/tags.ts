import { okResponse } from './common'
import { Item } from './items'

export interface ITag {
  createdAt: string
  id: number
  items: Item[] | null
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
