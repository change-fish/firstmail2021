<template>
  <div v-if="Object.keys(goods).length !== 0" class="goods-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in (goods.services.length-1)" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-info{
  padding-bottom:20px ;
  border-bottom: 2px solid #ccc;
}
.info-title{
  color: #333;
  font-size: 15px;
  line-height: 20px;
  height: 50px;
  overflow: hidden;
}
.info-price{
  display:flex;
  font-size: 18px;
}
.info-other{
  display: flex;
  height: 40px;
  line-height: 40px;
  color: #333;
  font-size: 12px;
}
.info-other span{
  flex: 1;
}
.info-service{
  height: 20px;
  display: flex;
  font-size: 12px;
}
.info-service-item{
  flex: 1;
}
.info-service img{
  width: 12px;
}
</style>