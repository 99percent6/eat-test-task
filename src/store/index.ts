import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './types/RootState'
import product from './product'
import ui from './ui'
import order from './order'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  modules: {
    product,
    ui,
    order,
  },
})
