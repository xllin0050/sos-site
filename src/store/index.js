import { createStore } from 'vuex'

export default createStore({
  state:{

      items: []

  },
  mutations: {
    addItem(state, item){
      state.items = item
    }
  }
})

