import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GraphQL from '../views/GraphQL.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/graphql',
    name: 'GraphQL',
    component: GraphQL
  }
]

const router = new VueRouter({
  routes
})

export default router
