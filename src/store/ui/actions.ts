import { ActionTree } from 'vuex'
import { UiState } from './types'
import { RootState } from '../types/RootState'
import * as types from './mutation-types'

const actions: ActionTree<UiState, RootState> = {
  changeHeaderTitle({ commit }, { title }: { title: string }): void {
    commit(types.CHANGE_HEADER_TITLE, title)
  },
  toogleLoader: {
    root: true,
    handler({ commit }, { value }: { value: boolean }): void {
      commit(types.TOGGLE_LOADER, value)
    },
  },
}

export default actions
