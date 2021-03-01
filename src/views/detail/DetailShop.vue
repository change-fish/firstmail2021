<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <!-- <div class="cells-count">{{shop.sells|sellCountFilter}}</div> -->
          <div class="cells-count">{{shopSells(shop.sells)}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td>
              <span class="assess" :class="{'assess-better':item.isBetter}">{{assess(item.isBetter)}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
     <div class="shop-enter">
        <div class="shop-enter-text">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
  name:'DetailShop',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    shopSells: function (value){
      if (value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    },
    assess(value){
      if (value) return '高';
      return '低'
    },
  }
}
</script>

<style scoped>
.shop-info{
  padding-bottom: 10px;
}
.shop-top{
  line-height: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  
}
.shop-top img{
  margin: 0 15px;
  line-height: 100px;
  width: 40px;
  border-radius: 50%;
  border: solid 1px #ccc;
}
.title{
  color: #888;
  font-size: 20px;
}
.shop-middle{
  display: flex; 
  height: 80px;
  align-items: center;
  color: #333;
}
.shop-middle-left{
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex: 1;
}
.info-sells,.info-goods{
  flex: 1;
  text-align: center;
}
.cells-count,.goods-count{
  font-size: 18px;
}
.sells-text,.goods-text{
  font-size: 14px;
}
.shop-middle-right{
  padding-left: 20px;
  flex: 1;
  font-size: 12px;
  line-height: 18px;
}
.score{
  padding-left: 5px;
  color: rgb(51, 160, 36);
}
.score-better{
  color: #f55;
}
.assess{
  color: #fff;
  background-color: green;
}
.assess-better{
  background-color: #f55;
}
.shop-enter-text{
  margin: 0 auto ;
  border-radius: 5px;
  text-align: center;
  line-height:30px ;
  width: 100px;
  height: 30px;
  background-color: #ddd;
  color: #333;
}
</style>