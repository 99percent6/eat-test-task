import { ProductState } from '../product/types'
import { UiState } from '../ui/types'
import { OrderState } from '../order/types'

export interface RootState {
  product: ProductState,
  ui: UiState,
  order: OrderState
}
