<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="navbar">
      <template v-slot:center>
        <div class="navbar-center">购物车({{length}})</div>
      </template>
    </nav-bar>

    <!-- 商品展示 -->
    <cart-list></cart-list>
    <!-- 结算 -->
    <cart-settle-bar></cart-settle-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
import CartList from './CartList'
import CartSettleBar from './CartSettleBar'

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components:{
    NavBar,
    CartList,
    CartSettleBar,
  },
  computed:{
    //两种语法将store内的getters方法转化为局部的计算属性
    //...mapGetters(['cartLength'])
    ...mapGetters({
      length:'cartLength'//起别名为length
    })
  },
  
}
</script>

<style scoped>
.cart{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.navbar{
  width: 100%;
  background-color: #f55;
  position: relative;
  z-index: 9;
}
.navbar-center{
  color: #fff;
}
</style>
