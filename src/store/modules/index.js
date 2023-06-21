import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      count: 0,
      tasks: [{
        id: '1000',
        code: '3e45r3e5r',
        name: 'Yoga Set',
        category: 'Private',
        inventoryStatus: 'ACTIVE',
      },
      {
        id: '1001',
        code: 'edrfthed5',
        name: 'Print documents',
        category: 'Work',
        inventoryStatus: 'ON HOLD',
      },
      {
        id: '1002',
        code: 'r5yhtryh5',
        name: 'Buy presents',
        category: 'Family',
        inventoryStatus: 'INACTIVE',
      }
      ]
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter(task => task.id != payload.id)
    },
    updateTask(state, payload) {
      let b = state.tasks.findIndex(task => task.id == payload.id)
      state.tasks.splice(b, 1, payload)
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task)
    },
    deleteTask({ commit }, task) {
      commit('deleteTask', task)
    },
    updateTask({ commit }, task) {
      commit('updateTask', task)
    }
  },
  getters: {
    getAllTasks(state) {
      return state.tasks
    }
  },
})

export default store