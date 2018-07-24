// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */

import Vue from 'vue'
import Framework7 from 'framework7/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import axios from 'axios'
import App from './app'
import Framework7Styles from 'framework7/css/framework7.css'
import AppStyles from './css/app.less'

Vue.config.productionTip = false
Framework7.use(Framework7Vue)

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
  }
})
