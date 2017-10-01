{{#if_eq build "runtime"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import Shrub from 'shrub'
import App from './App'

Vue.use(Shrub, {
  locales: ['fr', 'en']
})

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
