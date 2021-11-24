import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTailwind from 'vue-tailwind/dist/full'

const settings = {
  TInput: {
    classes: 'border-2 block w-full rounded text-gray-800',
    // ...More settings
  },
  TButton: {
    classes: 'rounded-lg border block inline-flex items-center justify-center',
    // ...More settings
  },
  // ...Rest of the components
}

Vue.use(VueTailwind, settings)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
