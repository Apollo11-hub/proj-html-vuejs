import Vue from 'vue'
import App from './App.vue'

// <BOOTSTRAP>

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// The BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// <BOOTSTRAP/>

// <FONT-AWESOME>

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import { faChartLine } from '@fortawesome/free-solid-svg-icons'

import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

import { faWallet } from '@fortawesome/free-solid-svg-icons'

import { faBullseye } from '@fortawesome/free-solid-svg-icons'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { faInstagram} from '@fortawesome/free-brands-svg-icons'

import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import { faFacebookF} from '@fortawesome/free-brands-svg-icons'

import { faTwitter} from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPlay)

library.add(faChartLine)

library.add(faBullhorn)

library.add(faWallet)

library.add(faBullseye)

library.add(faArrowLeft)

library.add(faArrowRight)

library.add(faInstagram)

library.add(faLinkedinIn)

library.add(faFacebookF)

library.add(faTwitter)


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


// </FONT-AWESOME>

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
