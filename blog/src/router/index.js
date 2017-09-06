import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/book/book'
import BookAarray from './bookName'
Vue.use(Router)
export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'book',
      component: Book,
      children:BookAarray,
      redirect: '/bookName/1'
    }
  ]
})
