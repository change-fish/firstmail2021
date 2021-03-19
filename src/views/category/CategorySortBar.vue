<template>
  <div class="sort" v-if="Object.keys(sortTitles).length !==0">
    <div v-for="(item,index) in sortTitles" :key="index" 
     class="sort-bar-item"
     :class="{active:index === currentIndex}"
     @click="sortBarClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'CategorySortBar',
  props:{
    sortbartitles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0,
      sortTitles:[],
    }
  },
  watch: { 
    sortbartitles: { 
      handler(newVal){ 
        this.sortTitles = newVal 
        //console.log(this.sortTitles)
      }
    },
  }, 
  methods:{
    sortBarClick(index){
      this.currentIndex = index
      this.$emit('sortClick',index)
    },
  },

}
</script>

<style scoped>
.sort{
  width: 70px;
  display: flex;
  background-color: #eee;
  flex-direction: column;
  overflow-y: scroll;
}
.sort-bar-item{
  flex: 1;
  height: 25px;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
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
