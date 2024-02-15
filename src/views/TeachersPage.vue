<template>
   <div>
      <div v-for="(teacherNamesArr, subjectId) in teachersListToShow" :key="subjectId">
         <h4>{{ getSubjectById(subjectId).title }}</h4>
         <ul>
            <li v-for="teacherName in teacherNamesArr" :key="teacherName">{{ teacherName }}</li>
         </ul>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   name: 'TeachersPage',
   computed: {
      //...mapGetters('teachers', ['teachersList']),
      ...mapGetters('teachers', ['teachersListToShow']),
      ...mapGetters('subjects', ['getSubjectById']),
   },
}
</script>

<style lang="scss" scoped></style>
