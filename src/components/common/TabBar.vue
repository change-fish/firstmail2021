<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'TabBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#tab-bar{
  display: flex;
  background-color: #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  box-shadow: 0px -10px 1px rgba(100, 100, 100, .1);
}
</style>
