import { IMeta, okResponse } from './common'
import { ITag } from './tags'
import { IMedia } from './media'

export interface IItem {
  createAt: string
  id: number
  images: IMedia[]
  name: string
  price: number
  sku: string
  tags: ITag[]
  updatedAt: string
}

interface ItemLists {
  items: IItem[]
  meta: IMeta
}

export interface IRespItems extends okResponse {
  data: ItemLists
}

export interface IRespItem extends okResponse {
  data: IItem
}
