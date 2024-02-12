import { createRouter, createWebHistory } from 'vue-router'
// import EventManagement from '../components/EventManagement.vue'
// import EventManagementView from '../components/EventManagementView.vue'
import DashboardView from '../views/DashboardView.vue'
import Dashboard from '@/components/Dashboard.vue'
import EventManagementView from '../views/EventManagementView.vue'
import AnalyticsEventsPageVue from '@/views/AnalyticsEventsPage.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: DashboardView,
    children: [
      {
        path: '',
        component: Dashboard
      }
    ]
  },
  {
    path: '/events',
    component: EventManagementView
  },
  {
    path: '/analytics',
    component: AnalyticsView,
    children: [
      {
        path: '/analytics/:id',
        component: AnalyticsEventsPageVue
      }
    ]
  }

  // Other routes...
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes
})

export default router
