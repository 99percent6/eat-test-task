import { GetterTree } from 'vuex'
import { ProductState } from './types'
import { RootState } from '../types/RootState'

const getters: GetterTree<ProductState, RootState> = {
  getList: (state) => state.list,
  pageCount: (state) => {
    const { total } = state
    const { size } = state.pagination
    return Math.ceil(total / size)
  },
}

export default getters
