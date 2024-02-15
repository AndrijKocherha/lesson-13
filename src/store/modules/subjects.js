export default {
   namespaced: true,
   state: {
      subjects: [
         { id: 1, title: 'Математика' },
         { id: 2, title: 'Фізика' },
         { id: 3, title: 'Історія' },
         { id: 4, title: 'Хімія' },
         { id: 5, title: 'Література' },
         { id: 6, title: 'Фізкультура' },
      ],
   },
   getters: {
      subjects: (state) => (idList) => {
         if (!idList) return state.subjects
         return state.subjects.filter((subject) => idList.includes(subject.id + ''))
      },
      getSubjectById:
         ({ subjects }) =>
         (subjectId) => {
            return subjects.find((subject) => subject.id == subjectId)
         },
   },
   mutations: {},
   actions: {},
   modules: {},
}
