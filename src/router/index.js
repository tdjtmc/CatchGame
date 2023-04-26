import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScoreRushView from '../views/ScoreRushView.vue'
import TimeSprintView from '../views/TimeSprintView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/score-rush',
      name: 'ScoreRushView',
      component: ScoreRushView
    },
    {
      path: '/time-sprint',
      name: 'TimeSprintView',
      component: TimeSprintView
    }
  ]
})

export default router
