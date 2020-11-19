import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/List.vue'

Vue.use(VueRouter)

const routes = [
  { path:'/list', component: List }
]

const router = new VueRouter({
  routes
})

export default router
