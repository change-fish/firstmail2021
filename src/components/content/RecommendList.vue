<template>
  <div class="goods">
    <goods-list-item 
    class="goods-item" 
    v-for="(item,index) in recommends" 
    :key="index"
    :goodsitem="item">
      <template v-slot:goods-img>
        <div class="goods-img">
          <img :src="item.image" alt="">
        </div>
      </template>
      <template v-slot:goods-info>
        <div class="goods-info">
          <p>{{item.title}}</p>
          <span class="goods-price"> ￥{{item.price}}</span>
          <span class="goods-cfav">{{item.cfav}}人收藏</span>
        </div>
      </template>
    </goods-list-item>
  </div>
</template>

<script>

import GoodsListItem from './GoodsListItem'

export default {
  name:'RecommendList',
  components:{
    GoodsListItem,
  },
  props:{
    recommends:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
.goods{
  padding-top: 20px;
  width: 100%;
  display:flex ;
  flex-wrap: wrap;
  justify-content:space-around;
  border-top: solid 1px #ccc;
}
.goods-item{
  width: 46%;
  font-size: 15px;
  color: #222;
  background-color: #fff;
  margin-top: 5px;
  
}
.goods-img{
  height: 225px;
}
.goods-img img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  padding-bottom: 5px;
  overflow: hidden;
}
.goods-info p{
height: 40px;
overflow: hidden;
margin: 0 0 14px 0;
}
.goods-price{
  color: var(--color-high-text);
  font-size: 16px;
}
.goods-cfav{
  padding-left: 2px;
  color: #aaa;
  font-size: 12px;
}
</style>