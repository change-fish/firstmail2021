<template>
  <div class="backtop">
    <i class="fas fa-arrow-circle-up"></i>
  </div>
</template>
<script>
export default {
  //此组件用于在滑动页面是显示一个回到顶部的图标
  name:'BackTop',
}
</script>
<style scoped>
.fas{
  font-size: 25px;
  color: #333;
}
.backtop{
  z-index: 12; 
  position:fixed;
  bottom:55px;
  right: 18px;
}
</style>