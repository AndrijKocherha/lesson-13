import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false },
   },
   {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue'),
      meta: { requiresAuth: false },
   },
   {
      path: '/lesons',
      name: 'lesons',
      component: () => import('../views/SubjectsPage.vue'),
      children: [
         {
            path: 'select',
            name: 'subject-select',
            component: () => import('../views/SelectSubject.vue'),
            meta: { requiresAuth: true },
         },
         {
            path: ':subjectsIdList(\\d+)+',
            name: 'teacher-selct',
            props: true,
            component: () => import('../views/SelectTeacher.vue'),
            meta: { requiresAuth: true },
         },
         {
            path: ':plans(\\d+-d+)+',
            name: 'studing-plan',
            props: true,
            component: () => import('../views/StudingPlan.vue'),
            meta: { requiresAuth: false },
         },
      ],
   },
   {
      path: '/teachers',
      name: 'teachers',
      component: () => import('../views/TeachersPage.vue'),
      meta: { requiresAuth: false },
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundPage.vue'),
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

router.beforeEach((to) => {
   const isUserLogedIn = window.userData
   if (to.meta.requiresAuth && !isUserLogedIn) {
      return {
         name: 'login',
         query: { redirect: to.fullPath },
      }
   }
})

export default router
