<template>
  <div class="backtop">
    <img src="~assets/img/backtop.jpg" alt="">
  </div>
</template>
<script>
export default {
  //此组件用于在滑动页面是显示一个回到顶部的图标
  name:'BackTop',
}
</script>
<style scoped>
img{
  width: 30px;
  height: 30px;
}
.backtop{
  z-index: 12; 
  position:fixed;
  bottom:55px;
  right: 18px;
}
</style>