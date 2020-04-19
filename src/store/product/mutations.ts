import { MutationTree } from 'vuex'
import { ProductState, Product } from './types'
import * as types from './mutation-types'

const mutations: MutationTree<ProductState> = {
  [types.SET_LIST](state, list: Product[]) {
    state.list = list
  },
}

export default mutations
