import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/book/book/book'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'book',
      component: Book
    }
  ]
})
