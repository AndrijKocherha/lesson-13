<template>
   <header class="header">
      <nav class="header__list">
         <router-link to="/">Home</router-link> | <router-link :to="{ name: 'subject-select' }">Уроки</router-link> |
         <router-link :to="{ name: 'teachers' }">Вчителі</router-link> |
      </nav>
      <div class="header__actions">
         <div v-if="userName" class="user-name">{{ userName }}</div>
         <button @click="onButtonAction">{{ buttonTitle }}</button>
      </div>
   </header>
   <router-view />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   data() {
      return {
         storedUserName: sessionStorage.getItem('userName'),
      }
   },
   computed: {
      //...mapGetters(['userName']),
      ...mapGetters(['userName']),

      buttonTitle() {
         return this.userName ? 'Вийти' : 'Увійти'
      },
   },

   methods: {
      ...mapActions(['setUserName']),

      onButtonAction() {
         //console.log('')
         if (this.userName) {
            window.userData = null
            this.setUserName(null)
         } else {
            this.$router.push({ name: 'login' })
         }
      },
   },
}
</script>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
}

.user-name {
   font-size: 20px;
}

.header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   // .header__list
   &__list {
   }
   // .header__actions
   &__actions {
      display: flex;
      gap: 20px;
   }
}

nav {
   padding: 30px;

   a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
         color: #42b983;
      }
   }
}
</style>
