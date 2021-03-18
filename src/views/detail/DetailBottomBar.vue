<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="bar-item">
        <i class="fas fa-smile"></i>
        <span class="text">客服</span>
      </div>
      <div class="bar-item">
        <i class="fas fa-store"></i>
        <span class="text">店铺</span>
      </div>
      <div class="bar-item">
        <i class="fas fa-heart"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods:{
    //监听点击添加到购物车,发送到父组件
    addToCart(){
      //console.log('addcart');
      this.$emit('addToCart')
    },
  }
}
</script>

<style scoped>

@import "~assets/css/base.css";

.bottom-bar{
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: 0px;
  color: #333;
  display: flex;
  text-align: center;
  font-size: 12px;
}
.bar-left{
  flex: 3;
  display: flex;
  background-color: #fff;
}
.bar-item{
  flex: 1;
  display: flex;
  flex-direction:column;
}
.bar-right{
  flex: 2;
  display: flex;
  line-height: 45px;
}
.fas{
  color:var(--color-high-text);
}
.cart{
  background-color: #ff0;
  flex: 1;
}
.buy{
  color: #fff;
  background-color:var(--color-high-text);
  flex: 1;
}
</style>


