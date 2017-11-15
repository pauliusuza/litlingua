// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import localeLt from './i18n/lt.json'
import localeNl from './i18n/nl.json'
import App from './App'
import router from './router'

Vue.config.productionTip = true
Vue.use(Vuex);

const store = new Vuex.Store();

Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('lt', localeLt)
Vue.i18n.add('nl', localeNl)
Vue.i18n.set('nl')

router.beforeEach((to, from, next) => {
    if(to.params.lang) {
        Vue.i18n.set(to.params.lang)
    }
    next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
