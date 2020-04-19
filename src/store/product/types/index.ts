export interface Product {
  id: number,
  name: string,
  sku: string,
  price: number,
  qty: number
}

export interface ProductState {
  list: Product[],
  total: number,
  pagination: {
    page: number,
    size: number,
  },
}
