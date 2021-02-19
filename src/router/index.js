import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
