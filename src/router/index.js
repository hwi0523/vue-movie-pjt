import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import BoxOfficeByDay from '../views/BoxOfficeByDay';
import BoxOfficeweek from '../views/BoxOfficeweek';
import BoxOffice from '../views/BoxOffice';
const routes = [
  {
    path: '/',
    name: 'name',
    component: Home
  },
  {
    path: '/boxOfficeByDay',
    name: 'boxOfficeByDay',
    component: BoxOffice,
  },
  {
    path: '/boxOfficeweek',
    name: 'boxOfficeweek',
    component: BoxOffice,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
