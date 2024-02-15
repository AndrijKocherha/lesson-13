export default {
   namespaced: true,
   state: {
      lessons: [],
   },
   getters: {
      lessons: (state, getters, rootState, rootGetters) => {
         return state.lessons.map((lesson) => {
            return {
               id: new Date().getTime(),
               teacherName: rootGetters['teachers/getTeacherById'](lesson.teacherId).name,
               subjectTitle: rootGetters['subjects/getSubjectById'](lesson.subjectId).title,
            }
         })
      },
   },
   mutations: {
      setLessons(state, lessons) {
         let newLessons = []
         for (const subjectId in lessons) {
            let newLesson = {
               subjectId: parseInt(subjectId),
               teacherId: lessons[subjectId],
            }
            newLessons.push(newLesson)
         }
         state.lessons = newLessons
      },
   },
   actions: {
      setLessons({ commit }, lessons) {
         commit('setLessons', lessons)
      },
   },
   modules: {},
}
