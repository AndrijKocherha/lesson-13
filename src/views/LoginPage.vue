<template>
   <form>
      <div>
         <label>
            Name
            <input v-model="userLoginData.name" type="text" autocomplete="username" />
         </label>
      </div>
      <div>
         <label>
            Password
            <input v-model="userLoginData.password" type="password" autocomplete="current-password" />
         </label>
      </div>
      <button @click="onLogin">Login</button>
   </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'LoginPage',
   data() {
      return {
         userLoginData: {
            name: null,
            password: null,
         },
      }
   },
   methods: {
      ...mapActions(['setUserName']),
      onLogin() {
         event.preventDefault()
         if (this.userLoginData.name && this.userLoginData.password) {
            window.userData = this.userLoginData
            this.setUserName(this.userLoginData.name)
            if (this.$route.query.redirect) {
               this.$router.push({
                  path: this.$route.query.redirect,
               })
            } else this.$router.push({ path: '/' })
         }
      },
   },
}
</script>

<style lang="scss" scoped></style>
