import { Module } from 'vuex'
import { ProductState } from './types'
import { RootState } from '../types/RootState'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const product: Module<ProductState, RootState> = {
  namespaced: true,
  state: {
    list: [],
    total: 0,
    pagination: {
      page: 1,
      size: 10,
    },
  },
  actions,
  mutations,
  getters,
}

export default product
