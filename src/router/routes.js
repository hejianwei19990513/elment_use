import Vue from 'vue'
import VueRouter from 'vue-router'
import form from '../components/form.vue'
import '../assets/global.css'
import button from '../components/button.vue'
import select from '../components/select.vue'
import message from '../components/message.vue'
import dialog from '../components/dialog.vue'
import messagebox from '../components/messagebox.vue'
import menu from '../components/menu.vue'
import breadcrumb from '../components/breadcrumb.vue'
import table from '../components/table.vue'
import switches from '../components/switch.vue'
import tooltip from '../components/tooltip.vue'
import pagination from '../components/pagination.vue'
import divider from '../components/divider.vue'
import tree from '../components/tree.vue'
import cascader from '../components/cascader.vue'
import tabs from '../components/tabs.vue'
import steps from '../components/steps.vue'
import upload from '../components/upload.vue'
import timeline from '../components/timeline.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
  {path:'/form',component:form},
  {path:'/button',component:button},
  {path:'/select',component:select},
  {path:'/message',component:message},
  {path:'/dialog',component:dialog},
  {path:'/messagebox',component:messagebox},
  {path:'/menu',component:menu},
  {path:'/breadcrumb',component:breadcrumb},
  {path:'/table',component:table},
  {path:'/switch',component:switches},
  {path:'/tooltip',component:tooltip},
  {path:'/pagination',component:pagination},
  {path:'/divider',component:divider},
  {path:'/tree',component:tree},
  {path:'/cascader',component:cascader},
  {path:'/tabs',component:tabs},
  {path:'/steps',component:steps},
  {path:'/upload',component:upload},
  {path:'/timeline',component:timeline},
  ]
})

export default router