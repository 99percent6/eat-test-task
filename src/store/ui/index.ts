import { Module } from 'vuex'
import { UiState } from './types'
import { RootState } from '../types/RootState'
import actions from './actions'
import mutations from './mutations'

const ui: Module<UiState, RootState> = {
  namespaced: true,
  state: {
    headerTitle: 'Главная',
    loader: false,
  },
  actions,
  mutations,
}

export default ui
