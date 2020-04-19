import { MutationTree } from 'vuex'
import * as types from './mutation-types'
import { UiState } from './types'

const mutations: MutationTree<UiState> = {
  [types.CHANGE_HEADER_TITLE](state, title: string) {
    state.headerTitle = title
  },
  [types.TOGGLE_LOADER](state, value: boolean) {
    state.loader = value
  },
}

export default mutations
