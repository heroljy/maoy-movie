// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)
Vue.config.productionTip = false

let rootFontSize = document.getElementsByTagName('html')[0].style.fontSize
rootFontSize = rootFontSize.substr(0, rootFontSize.length - 2)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  fontSize: rootFontSize
})
