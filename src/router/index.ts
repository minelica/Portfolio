import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import SkillsPage from '@/pages/SkillsPage.vue'
import TimelinePage from '@/pages/TimelinePage.vue'
import ContactPage from '@/pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'projects',
        component: ProjectsPage,
      },
      {
        path: 'skills',
        component: SkillsPage,
      },
      {
        path: 'timeline',
        component: TimelinePage,
      },
      {
        path: 'contact',
        component: ContactPage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
