<template>
<div class="swiper">
  <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index" class="slide">
        <a :href="item.link">
          <img :src="item.image" alt="">
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
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem,
  }
}
</script>

<style scoped>
.swiper{
  margin-top:44px ;
}
.slide{
  width: 100%;
  flex-shrink: 0;
}
.slide img{
  width: 100%;
}
</style>



