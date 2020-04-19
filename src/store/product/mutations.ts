import { MutationTree } from 'vuex'
import { ProductState, Product } from './types'
import * as types from './mutation-types'

const mutations: MutationTree<ProductState> = {
  [types.SET_LIST](state, data: { total: number; items: Product[] }) {
    state.list = data.items
    state.total = data.total
  },
}

export default mutations
