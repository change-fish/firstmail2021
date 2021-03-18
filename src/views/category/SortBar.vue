<template>
  <div class="sort">
    <div v-for="(item,index) in titles" :key="index" 
     class="sort-bar-item"
     :class="{active:index === currentIndex}"
     @click="sortBarClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'SortBar',
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
  mounted(){
    console.log(this.titles)
  },
  methods:{
    sortBarClick(index){
      this.currentIndex = index
      this.$emit('sortClick',index)
    },
  }
}
</script>

<style scoped>
.sort{
  height: calc(100% - 44px - 40px);
  display: flex;
  width: 60px;
  background-color: #fee;
  flex-direction: column;
}
.sort-bar-item{
  flex: 1;
  height: 30px;
  text-align: center;
  font-size: 15px;
  line-height: 30px;
  color: #333;
  border-bottom:2px solid #fff;
}
.sort-bar-item span{
  display: inline-block;
  padding: 5px;
  height: 30px;
}
.active{
  color:#f55;
}
.active span{
  border-bottom:2px solid #f55 ;
}
</style>
