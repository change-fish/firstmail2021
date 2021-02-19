<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <i class="fas fa-house-user"></i>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <i class="fas fa-qrcode"></i>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <template v-slot:item-icon>
        <i class="fas fa-cart-arrow-down"></i>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <i class="fas fa-user"></i>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/TabBar";
import TabBarItem from "../common/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
 @import '~assets/css/fontawesome/css/all.css'; 

.fas {
  font-size: 20px;
  margin: 5px 0 0;
}
</style>
