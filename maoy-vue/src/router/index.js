import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/index'
import City from '~/city'
import FilmDetail from '~/film-detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/filmDetail/:filmName',
      name: 'filmDetail',
      component: FilmDetail
    }
  ]
})
