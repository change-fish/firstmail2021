import Toast from './Toast.vue'
const obj = {}

//执行install函数时，会将vue传入函数
obj.install = function(Vue){
  console.log(Vue);1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2.new的方式，根据组件构造器，可以创建出一个组件对象
  const toast = new toastConstructor
  //3.将组件对象手动挂载到一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div,将div添加到body上
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj