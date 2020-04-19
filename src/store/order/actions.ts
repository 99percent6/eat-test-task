import { ActionTree } from 'vuex'
import { result as resultType } from '@/lib/task/types'
import { OrderController } from '@/controller'
import { RootState } from '../types/RootState'
import { OrderState, Product, OrderCreate } from './types'

const actions: ActionTree<OrderState, RootState> = {
  async createOrder({ dispatch }, payload: Product[]): Promise<resultType> {
    dispatch('toogleLoader', { value: true }, { root: true })
    const { result } = await OrderController.createOrder({ items: payload })
    dispatch('toogleLoader', { value: false }, { root: true })
    const [error, response] = result
    if (typeof response !== 'number' && !error) {
      return [response, null]
    }
    return result
  },
  async payOrder({ dispatch }, payload: OrderCreate): Promise<resultType> {
    dispatch('toogleLoader', { value: true }, { root: true })
    const { result } = await OrderController.payOrder(payload)
    dispatch('toogleLoader', { value: false }, { root: true })
    const [error, response] = result
    if (typeof response === 'string' && !error) {
      return [response, null]
    }
    return result
  },
}

export default actions
