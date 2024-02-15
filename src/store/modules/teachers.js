export default {
   namespaced: true,
   state: {
      teachers: [
         { id: 1, name: 'Іван Іванович Петренко', subjectId: 1 },
         { id: 2, name: 'Марія Петрівна Сидоренко', subjectId: 2 },
         { id: 3, name: 'Олена Василівна Коваленко', subjectId: 3 },
         { id: 4, name: 'Павло Олександрович Литвиненко', subjectId: 4 },
         { id: 5, name: 'Анна Михайлівна Ткаченко', subjectId: 5 },
         { id: 6, name: 'Сергій Вікторович Іваненко', subjectId: 6 },
         { id: 7, name: 'Наталія Ігорівна Кравченко', subjectId: 1 },
         { id: 8, name: 'Євген Валерійович Гончаренко', subjectId: 3 },
         { id: 9, name: 'Тетяна Петрівна Козак', subjectId: 5 },
         { id: 10, name: 'Іван Іванович Петренко', subjectId: 1 },
         { id: 11, name: 'Марія Петрівна Сидоренко', subjectId: 2 },
         { id: 12, name: 'Олена Василівна Коваленко', subjectId: 3 },
         { id: 13, name: 'Оксана Михайлівна Шевченко', subjectId: 1 },
         { id: 14, name: 'Андрій Віталійович Григоренко', subjectId: 2 },
         { id: 15, name: 'Валентина Іванівна Кравченко', subjectId: 3 },
         { id: 16, name: 'Максим Сергійович Шевчук', subjectId: 4 },
         { id: 17, name: 'Юлія Володимирівна Лисенко', subjectId: 5 },
         { id: 18, name: 'Денис Ігорович Сидорчук', subjectId: 6 },
      ],
   },
   getters: {
      teachersList:
         ({ teachers }) =>
         (subjectId) => {
            if (!subjectId) return teachers
            return teachers.filter((teacher) => teacher.subjectId == subjectId)
         },
      // можна було вивести вчителів перебираючи subjects і викликаючи getter teachersList але
      // так я перебираю масив 1 раз а в іношому випадку я буду постійно фільтрувати teachersList. правильно я мислю чи ні ?
      teachersListToShow: (state) => {
         let sortedList = {}
         for (const teacher of state.teachers) {
            let teachersList = sortedList[teacher.subjectId]
            if (teachersList) sortedList[teacher.subjectId].push(teacher.name)
            else sortedList[teacher.subjectId] = [teacher.name]
         }
         return sortedList
      },
      getTeacherById:
         ({ teachers }) =>
         (teacherId) =>
            teachers.find((teacher) => teacher.id === teacherId),
   },
   mutations: {},
   actions: {},
   modules: {},
}
