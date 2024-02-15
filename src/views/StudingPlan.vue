<template>
   <div>
      <div v-for="lesson in lessons" :key="lesson.id">
         <span class="subject">{{ lesson.subjectTitle }}</span> - {{ lesson.teacherName }}
      </div>
      <!--<div v-for="lesson in lessons" :key="lesson">{{ lesson.subjectId }}- {{ lesson.teacherId }}</div>-->
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   name: 'StudingPlan',
   computed: {
      ...mapGetters('lessons', ['lessons']),
   },
}
</script>

<style lang="scss" scoped>
.subject {
   font-size: 20px;
}
</style>
