<template>
   <div>
      <div v-for="subject in subjects(subjectsIdList)" :key="subject.id">
         {{ subject.title }} -
         <select v-model="selectedStudPlans[subject.id]">
            <option v-for="teacher in teachersList(subject.id)" :value="teacher.id" :key="teacher.id">
               {{ teacher.name }}
            </option>
         </select>
      </div>
      <button @click="startStuding">Розпочати навчання</button>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'SelectTeacher',
   props: {
      subjectsIdList: {
         type: Array,
      },
   },
   data() {
      return {
         selectedStudPlans: {},
      }
   },
   computed: {
      ...mapGetters('subjects', ['subjects']),
      ...mapGetters('teachers', ['teachersList']),
   },
   methods: {
      ...mapActions('lessons', ['setLessons']),
      startStuding() {
         if (this.subjectsIdList.length === Object.keys(this.selectedStudPlans).length) {
            this.setLessons(this.selectedStudPlans)
            let plans = []
            for (const plan in this.selectedStudPlans) {
               plans.push(`${plan}-${this.selectedStudPlans[plan]}`)
            }
            this.$router.push({
               name: 'studing-plan',
               params: {
                  plans,
               },
            })
         }
      },
   },
}
</script>

<style lang="scss" scoped></style>
