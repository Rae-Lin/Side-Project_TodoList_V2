import Vue from 'vue'
import App from './App.vue'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, far, fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 全域CSS
import "reset-css"
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
