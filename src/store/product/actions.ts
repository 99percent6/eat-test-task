import { ActionTree } from 'vuex'
import { result as resultType } from '@/lib/task/types'
import { ProductController } from '@/controller'
import { ProductState, Product } from './types'
import { RootState } from '../types/RootState'
import * as types from './mutation-types'

const actions: ActionTree<ProductState, RootState> = {
  async generateSamples({ dispatch }): Promise<resultType> {
    dispatch('toogleLoader', { value: true }, { root: true })
    const { code, result } = await ProductController.generateSampleProducts()
    dispatch('toogleLoader', { value: false }, { root: true })
    if (code === 200) {
      dispatch('list', {})
    }
    return result
  },
  async list(
    { commit, state, dispatch },
    { page = 1, useCache = false }: { page?: number; useCache?: boolean },
  ): Promise<Product[]> {
    if (state.list.length && useCache) {
      return state.list
    }
    dispatch('toogleLoader', { value: true }, { root: true })
    const { size } = state.pagination
    const { result } = await ProductController.getAllProducts({ page, size })
    dispatch('toogleLoader', { value: false }, { root: true })
    const [error, products] = result
    if (products) {
      commit(types.SET_LIST, products)
    }
    return products
  },
}

export default actions
