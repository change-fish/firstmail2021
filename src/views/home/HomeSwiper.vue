<template>
<div class="swiper-wrapper">
  <swiper >
      <swiper-item v-for="(item,index) in banner" :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
  </swiper>
</div>
</template>

<script>
import Swiper from 'components/common/Swiper'
import SwiperItem from 'components/common/SwiperItem'

export default {
  name:'HomeSwiper',
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isLoad:true
    }
  },
  methods:{
    imageLoad(){
      if(this.isLoad){
        this.$emit('imageLoad')
        this.isLoad = false
        //console.log('1');
      }
    },
  },
}
</script>

<style scoped>
.slide{
  width: 100%;
  flex-shrink: 0;
}
.slide img{
  width: 100%;
}
</style>



