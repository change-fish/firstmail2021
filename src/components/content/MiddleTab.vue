<template>
  <div class="middle-tab">
    <div v-for="(item,index) in titles" :key="index" 
     class="middle-tab-item"
     :class="{active:index === currentIndex}"
     @click="middleTabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'MiddleTab',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0,
    }
  },
  methods:{
    middleTabClick(index){
      this.currentIndex = index
      this.$emit('midTabClick',index)
    },
  }
}
</script>

<style scoped>
.middle-tab{
  display: flex;
  height: 54px;
  background-color: #fff;
}
.middle-tab-item{
  flex: 1;
  text-align: center;
  font-size: 15px;
  line-height: 40px;
  color: #333;
  border-bottom:2px solid #fff;
}
.middle-tab-item span{
  display: inline-block;
  padding: 5px;
  height: 40px;
}
.active{
  color:#f55;
}
.active span{
  border-bottom:2px solid #f55 ;
}
</style>