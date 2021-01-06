import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import './plugins/element.js'
import './components/button.vue'
import './components/form.vue'
import './components/select.vue'
import './components/message.vue'
import './components/dialog.vue'
import './components/messagebox.vue'
import './components/menu.vue'
import './components/breadcrumb.vue'
import './components/table.vue'
import './components/switch.vue'
import './components/pagination.vue'
import './components/divider.vue'
import './components/tree.vue'
import './components/cascader.vue'
import './components/tabs.vue'
import './components/steps.vue'
import './components/upload.vue'
import './components/timeline.vue'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
