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
        <middle-tab :titles="titles" class="mid-tab" @midTabClick="changeGoods"></middle-tab>
        <goods-list :goods="goods[currentgoods].list"></goods-list>
        <b-scroll></b-scroll>
    <!-- <b-scroll class="goods-wrapper"> </b-scroll> -->
    <back-top class="backtop"></back-top>
    
  </div>
</template>

<script>

import NavBar from 'components/common/NavBar'
import BScroll from 'components/common/BScroll'
import MiddleTab from 'components/content/MiddleTab'
import GoodsList from 'components/content/GoodsList'
import BackTop from 'components/content/BackTop'

import HomeSwiper from './HomeSwiper'
import HomeRecommend from './HomeRecommend'
import HomeFeature from './HomeFeature'

//没有用default导出，需要使用大括号导入
import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    MiddleTab,
    GoodsList,
    BScroll,
    BackTop,
  },
  data(){
    return {
     // result:null
     banner:[],
     recommend:[],
     titles:['流行','新款','精选'],
     goods:{
       'pop':{page:0,list:[]},
       'new':{page:0,list:[]},
       'sell':{page:0,list:[]},
     },
     currentgoods:'pop',
    }
  },
  created(){
    //这里调用函数，但是函数具体执行内容在methods内

    //请求首页基础数据
    this.homeMultidata()
    
    //分别请求商品的数据
    this.homeGoods('pop')
    this.homeGoods('new')
    this.homeGoods('sell')
  },
  mounted(){
    
  },
  methods:{
    homeMultidata(){
      getHomeMultidata().then(res => {
      //console.log(res)
      //this.result = res
      this.banner = res.data.banner.list//轮播图数据
      this.recommend = res.data.recommend.list//轮播图下面的展示框
    })
    },
    homeGoods(type){
      let page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        //console.log(res);
        //...是对数组内的元素进行解构，相当于遍历，然后可以使用push方法加到原数组内
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    //监听商品导航栏的事件
    changeGoods(index){
      //console.log(index)
      if(index === 0){
        this.currentgoods = 'pop'
      }else if(index === 1){
        this.currentgoods = 'new'
      }else {
        this.currentgoods = 'sell'
      }
    }
  },
}
</script>

<style scoped>
#home{
  height: 100vh;
}
/* .goods-wrapper{
 height: 515x;
 overflow-y: scroll;
} */
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
  top: 44px;
  z-index: 9;
}
.backtop{
  z-index: 12; 
  position:fixed;
  bottom:55px;
  right: 18px;
}
</style>
