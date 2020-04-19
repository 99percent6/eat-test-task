import { Task } from '@/lib/task/types'
import { Product, OrderCreate } from '@/store/order/types'
import task from '../lib/task'

class OrderController {
  static async createOrder(payload: { items: Product[] }): Promise<Task> {
    return task({ url: '/rest/order/create', method: 'POST', body: payload })
  }

  static async payOrder(payload: OrderCreate): Promise<Task> {
    return task({ url: '/rest/order/pay', method: 'POST', body: payload })
  }
}

export default OrderController
