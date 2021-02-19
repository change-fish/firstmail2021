<template>
  <div id="home">
    <div class="home-nav-wraper">
      <nav-bar class="home-nav">
       <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    </div>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend='recommend'></home-recommend>
    <home-feature></home-feature>
    <middle-tab :titles="titles" class="mid-tab"></middle-tab>
  </div>
</template>

<script>



import NavBar from 'components/common/NavBar'
import MiddleTab from 'components/content/MiddleTab'

import HomeSwiper from './HomeSwiper'
import HomeRecommend from './HomeRecommend'
import HomeFeature from './HomeFeature'

import {getHomeMultidata} from 'network/home'
//没有用default导出，需要使用大括号导入
export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    MiddleTab,
  },
  data(){
    return {
     // result:null
     banner:[],
     recommend:[],
     titles:['流行','新款','精选'],
    }
  },
  created(){
    getHomeMultidata().then(res => {
      console.log(res)
      //this.result = res
      this.banner = res.data.banner.list//轮播图数据
      this.recommend = res.data.recommend.list//轮播图下面的展示框
    })
  }
}
</script>

<style scoped>
#home{
  height: 1500px;
}
.home-nav-wraper{
  overflow: hidden;
}
.home-nav{
  width:100%;
  background-color: rgb(255, 92, 92);
  color: #fff;
  position: fixed;
  z-index: 10;
}
.mid-tab{
  position: sticky;
  top: 45px;
}
</style>
