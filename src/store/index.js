import { createStore } from 'vuex'
import subjects from './modules/subjects.js'
import teachers from './modules/teachers.js'
import lessons from './modules/lessons.js'
export default createStore({
   state: {
      userName: null,
   },
   getters: {
      userName: ({ userName }) => userName,
   },
   mutations: {
      setUserName(state, name) {
         state.userName = name
      },
   },
   actions: {
      setUserName({ commit }, name) {
         commit('setUserName', name)
      },
   },
   modules: {
      subjects,
      teachers,
      lessons,
   },
})
