// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import axios from 'axios'
import Routes from './routes.js'
import App from './App'

// Import F7 iOS Theme Styles
// import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
// OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'

import AppStyles from './css/app.less'

Vue.config.productionTip = false
Vue.use(Framework7Vue)

new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    routes: Routes,
    /* Comment this to disable Material theme: */
    material: true,

    // Any other parameters, e.g.
    animateNavBackIcon: true,
    swipePanel: 'left',
    hideNavbarOnPageScroll: true
  },
  // Register App Component
  components: {
    app: App
  }
})
