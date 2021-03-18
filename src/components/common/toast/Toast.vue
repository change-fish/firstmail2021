<template>
  <div class="toast" v-show="show">{{message}}</div>
</template>

<script>
export default {
  name:'Toast',
  props:{
    message:String,
    show:Boolean,
  },
 /*  data(){
    return {
      message:'',
      isShow:false,
    }
  },
  methods:{
    show(message,duration){
      this.isShow = true
      this.message = message
      setTimeout(() => {
          this.isShow = false
          this.message = ""
        },duration)
    }, 
  }*/
}
</script>

<style scoped>
.toast{
  position: fixed;
  z-index: 12;
  top: 55%;
  left: 30%;
  padding: 5px;
  border-radius: 5px;
  font-size:14px;
  color: #fff;
  background-color: rgba(0,0,0,.6);
}
</style>