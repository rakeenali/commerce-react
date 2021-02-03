import { ITag } from './tags'

export interface Item {
  createAt: string
  id: number
  image: string
  name: string
  price: number
  sku: string
  tags: ITag[]
  updatedAt: string
}
