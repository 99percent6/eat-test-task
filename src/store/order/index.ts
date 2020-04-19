import { Module } from 'vuex'
import { RootState } from '../types/RootState'
import { OrderState } from './types'
import actions from './actions'

const order: Module<OrderState, RootState> = {
  namespaced: true,
  state: {},
  actions,
}

export default order
