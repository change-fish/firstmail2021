<template>
  <div class="detail-image">
    <div class="detail-desc">{{detailData.desc}}</div>
    <div class="detail-key">{{detailImage.key}}</div>
    <div class="images">
      <img v-for="(item, index) in detailImage.list" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailImages",
  data(){
    return {
      detailData:{},
      detailImage:[],
      load:null,
    }
  },
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  //watch解决接收props的数据不完整，在mounted里只会执行一次，数据没有及时传递过来
  watch: { //监听父组件传过来的selectItems 
    detailInfo: { 
      handler(newVal){ 
          this.detailData = newVal; 
          //console.log(newVal);
          this.detailImage = newVal.detailImage[0]
        }
    /* handler(newVal,oldVal){ 
          console.log(oldVal);
         console.log(newVal);
          this.detailImages = newVal; 
          if(newVal) {//如果数据变化则重新创建数据用于渲染 
          this.itemsCreat();//处理数据 
      }  */
    }, 
    immediate:true,//immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的handler方法，如果为false，不会在绑定的时候执行                    
    //deep:true//deep，默认值是 false，代表是否深度监听。 
  }, 
  mounted(){
    this.load = this.debounce(() => {this.$emit('detailImageLoad')},1000)
  },
  methods:{
    imgLoad(){
        this.load() 
    }, 
    debounce(fun,delay){
      let timer = null
      return function(...args) {
        if(timer)clearTimeout(timer)
        timer = setTimeout(() => {
          fun.apply(this,args)
        },delay)
      }
    },
  },

}
</script>

<style scoped>
.detail-image{
  padding-top: 10px;
  border:solid 2px #ddd;
}
.detail-desc,.detail-key{
  color: #333;
  padding: 10px 0;
}
img{
  width: 100%;
}
</style>