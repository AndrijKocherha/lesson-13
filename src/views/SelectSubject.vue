<template>
   <div>
      <!-- без дужок не працює subjects -->
      <div v-for="subject in subjects()" :key="subject.id">
         <label>
            {{ subject.title }}
            <input v-model="selectedSubjectsId" :value="subject.id" type="checkbox" />
         </label>
      </div>
   </div>
   <button
      v-show="selectedSubjectsId.length >= 1"
      @click="() => this.$router.push({ name: 'teacher-selct', params: { subjectsIdList: selectedSubjectsId } })"
   >
      Вибрати Предмети
   </button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   name: 'SelectSubject',
   data() {
      return {
         selectedSubjectsId: [],
      }
   },
   computed: {
      ...mapGetters('subjects', ['subjects']),
   },
}
</script>

<style lang="scss" scoped></style>
