//import Vue from 'vue'
//Vue.config.devtools = true
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')
//console.log(App);
//console.log(app);
//console.log(app.config);
//app.config.globalProperties.$bus = createApp({})

/* if (process.env.NODE_ENV == 'development'){
  Vue.config.devtools = true
} else {
  Vue.config.devtools = true
} */
//console.log(Vue);
//Vue.prototype.$bus = new Vue()
