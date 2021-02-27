<template>
  <div @click="goodsClick">
    <slot name="goods-img"></slot>
    <slot name="goods-info"></slot>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  methods:{
    goodsClick(){
      //push可以返回
      //console.log(this.goodsitem);
      this.$router.push('/detail' + this.goodsitem.iid)
      
    },
  }
}
</script>

<style scoped>

</style>