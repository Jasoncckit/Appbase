// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */

import Vue from 'vue'
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'
import axios from 'axios'
import Routes from './routes.js'
import App from './app'
import Framework7Styles from 'framework7/dist/css/framework7.css'
import AppStyles from './css/app.less'

Vue.config.productionTip = false
Vue.use(Framework7Vue, Framework7)

new Vue({
  el: '#app',
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  },
  data () {
    return {
      Framework7Styles: Framework7Styles,
      AppStyles: AppStyles,
      axios: axios
    }
  },
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'me.appbase.testapp', // App bundle ID
    name: 'Appbase', // App name
    theme: 'auto', // Automatic theme detection
    routes: Routes,
    // Any other parameters, e.g.
    panel: {
      swipe: 'left',
      leftBreakpoint: 1216,
      rightBreakpoint: 1408
    },
    navbar: {
      hideOnPageScroll: true
    }
  }
})
