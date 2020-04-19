import { Product as ProductInterface } from '../../product/types'

export type Product = {
  product_id: number,
  qty: number
}

export interface OrderState {}

export interface OrderCreate {
  order_id: number,
  value: number
}

export interface OrderPayResponse {
  id: number,
  total: number,
  items: ProductInterface[]
}
