import { Task } from '@/lib/task/types'
import task from '../lib/task'

class ProductController {
  static async getAllProducts({ page, size }: { page: number; size: number }): Promise<Task> {
    return task({ url: `rest/product/list?page=${page}&size=${size}` })
  }

  static async generateSampleProducts(): Promise<Task> {
    return task({ url: '/rest/product/sample', method: 'POST' })
  }
}

export default ProductController
