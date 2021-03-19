<template>
  <div class="sort-list" v-if="Object.keys(sortList).length !==0">
    <div v-for="(item,index) in sortList" :key="index" class="sort-List-item"
     @click="sortListClick()">      
        <img :src="item.image" alt="" class="list-img"/>
        <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'CategorySortList',
  props:{
    categorySortList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      sortList:[],
    }
  },
  watch:{
    categorySortList:{
      handler(newVal){
        this.sortList = newVal
       // console.log(this.sortList);
      }
    }
  },
  methods:{
    sortListClick(){
      this.$router.push('/categoryDetail')
      this.$emit('listClick')
    }
  },
}
</script>

<style scoped>
.sort-list{
  display: flex;
  flex-wrap:wrap;
  justify-content:space-around;
  width: 100%;
}
.sort-List-item{
  width: 30%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  font-size: 12px;
}
.list-img{
  width: 50px;
}
</style>