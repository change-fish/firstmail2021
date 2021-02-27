<template>
<div>
  <swiper class="detail-wrapper">
      <swiper-item v-for="(item,index) in topImages" :key="index" >
          <img :src="item" alt="">
      </swiper-item>
  </swiper>
</div>
</template>

<script>
import Swiper from 'components/common/Swiper'
import SwiperItem from 'components/common/SwiperItem'

export default {
  name:'DetailSwiper',
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  methods:{
    
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
.detail-wrapper{
  height: 300px;
  overflow: hidden;
}
</style>



