<template>
  <div id="home">
    <div class="home-nav-wrapper">
      <nav-bar class="home-nav">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>
    </div>
    <middle-tab
        :titles="titles"
        :class="{midtab1 : isMidTabShow}"
        @midTabClick="changeGoods"
        ref="midtab1">
    </middle-tab>
    <b-scroll 
    class="goods-wrapper" 
    ref="bscroll" 
    :probe-type="3" 
    :pull-up-load="true" 
    @scroll1="homescroll"
    @pullingUp="pullData">
      <home-swiper :banner="banner" @imageLoad="swiperLoad"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <middle-tab
        :titles="titles"
        @midTabClick="changeGoods"
        ref="midtab2">
      </middle-tab>
      <goods-list :goods="goods[currentgoods].list"></goods-list>
    </b-scroll>
    <back-top @click="backTopClick" v-show="isShowTopBack"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar"
import BScroll from "components/common/BScroll"
import MiddleTab from "components/content/MiddleTab"
import GoodsList from "components/content/GoodsList"
import BackTop from "components/content/BackTop"

import HomeSwiper from "./HomeSwiper"
import HomeRecommend from "./HomeRecommend"
import HomeFeature from "./HomeFeature"

//没有用default导出，需要使用大括号导入
import { getHomeMultidata, getHomeGoods } from "network/home"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    MiddleTab,
    GoodsList,
    BScroll,
    BackTop,
  },
  data() {
    return {
      // result:null
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentgoods: "pop",
      isShowTopBack:false,
      midTabOffsetTop:null,
      isMidTabFixed:false,
      isMidTabShow:true,
      saveY:0,//页面滚动的位置
    };
  },
  
  created() {
    //这里调用函数，但是函数具体执行内容在methods内

    //请求首页基础数据
    this.homeMultidata();

    //分别请求商品的数据
    this.homeGoods("pop");
    this.homeGoods("new");
    this.homeGoods("sell");
  },
  activated(){
    //这里和老师代码顺序不同，否则会出现返回顶部的情况
    this.$refs.bscroll.bScroll.refresh()
    //console.log(this.saveY);
    this.$refs.bscroll.bScroll.scrollTo(0,this.saveY,0)
    
  },
  deactivated(){
    this.saveY = this.$refs.bscroll.getSaveY()
    //console.log(this.saveY);
  },
  methods: {
    //获取轮播图数据
    homeMultidata() {
      getHomeMultidata().then((res) => {
        //console.log(res)
        //this.result = res
        this.banner = res.data.banner.list; //轮播图数据
        this.recommend = res.data.recommend.list; //轮播图下面的展示框
      });
    },
    //获取商品数据
    homeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //console.log(res);
        //...是对数组内的元素进行解构，相当于遍历，然后可以使用push方法加到原数组内
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    //监听商品导航栏的点击事件
    changeGoods(index) {
      //console.log(index)
      if (index === 0) {
        this.currentgoods = "pop";
      } else if (index === 1) {
        this.currentgoods = "new";
      } else {
        this.currentgoods = "sell";
      }
      //解决两个midtab当前选项不同步问题
      this.$refs.midtab1.currentIndex = index
      this.$refs.midtab2.currentIndex = index
    },
    backTopClick() {   
      // console.log('回到顶部 ');
      //这里通过bscroll获取其内的bScroll
      //console.log(this.$refs.bscroll);
      this.$refs.bscroll.bScroll.scrollTo(0, 0, 1000);
    },
    //1.按钮的显示与隐藏 2.判断midtab的位置
    homescroll(position){
      //console.log(position);
       let y = -(position.y)
       if (y > 2000){
         this.isShowTopBack = true
       }else{
         this.isShowTopBack = false
       }

       if(y >= this.midTabOffsetTop ){
         this.isMidTabShow = false
       }else{
         this.isMidTabShow = true
       }
    },
    //加载更多数据
    pullData(){
      this.homeGoods(this.currentgoods)
      //这里需要再调用一次这个方法才能上拉进行下一次加载
      this.$refs.bscroll.bScroll.finishPullUp()
    },
    //判断miatab的offsetTop
    swiperLoad(){
      this.midTabOffsetTop = this.$refs.midtab2.$el.offsetTop
      //console.log(this.midTabOffsetTop)
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-nav-wrapper {
  overflow: hidden;
}
.home-nav {
  width: 100%;
  background-color: var(--color-high-text);
  color: #fff;
}
.goods-wrapper {
  height: calc(100% - 49px);
  overflow: hidden;
}
.midtab1{
  display:none;
}
</style>
