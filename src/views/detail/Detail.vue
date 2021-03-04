<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="detailnavbar"></detail-nav-bar>

    <b-scroll class="detail-wrapper" ref="bscroll" @scroll1="contentScroll">
      <detail-swiper :topImages="topImages" ></detail-swiper>

      <detail-info :goods="goods"></detail-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-images :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"></detail-images>
      <detail-param :detailParam="paraminfo" ref="params"></detail-param>
      <detail-comment :commentInfo="commentInfo" ref="comments"></detail-comment>
      <recommend-list :recommends="recommends" ref="recommends"></recommend-list>
      <!-- 这里和首页goodslist组件一样，复制了一份 -->
    </b-scroll>
  </div>
</template>

<script>

import BScroll from 'components/common/BScroll.vue'
import RecommendList from 'components/content/RecommendList.vue'

import DetailNavBar from './DetailNavBar.vue'
import DetailSwiper from './DetailSwiper.vue'
import DetailInfo from './DetailInfo.vue'
import DetailShop from './DetailShop.vue'
import DetailImages from './DetailImages.vue'
import DetailParam from './DetailParam.vue'
import DetailComment from './DetailComment.vue'

import {getGoodsDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    BScroll,
    DetailImages,
    DetailParam,
    DetailComment,
    RecommendList
  },
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},//商品具体图片
      paraminfo:{},//商品的参数
      commentInfo:{},//商品评价
      recommends:[],//推荐商品
      titleY:[]//各部分的高度位置
    }
  },
  created(){
    //拿到route里的路径的id
    this.iid = this.$route.params.id

    this.getDetail(this.iid)
    
    //请求推荐数据,数据在另一个接口内
    getRecommend().then(res => {
      this.recommends = res.data.list
      //console.log(this.recommends);
    })

    //当各组件渲染完后会回调下面的函数，得到各组件的高度数据,但数据也不对
    /* this.$nextTick(() => {
      this.titleY = []//先进行赋值为空，防止多次赋值导致数组无限变长
      this.titleY.push(0)
      this.titleY.push(this.$refs.params.$el.offsetTop)
      this.titleY.push(this.$refs.comments.$el.offsetTop)
      this.titleY.push(this.$refs.recommends.$el.offsetTop)
      console.log(this.titleY);
    }) */
  },
  mounted(){
    
  },
  methods:{
    getDetail(iid){
      getGoodsDetail(iid).then(res => {
      const data = res.result
      //console.log(data);
      this.topImages = res.result.itemInfo.topImages
      
      //这里通过构造函数将数据传入并整合
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //console.log(this.goods);

      //创建店铺信息对象
      this.shop = new Shop(data.shopInfo)
      //console.log(this.shop)

      //商品具体图片
      this.detailInfo = data.detailInfo
      //console.log(this.detailInfo);

      //商品参数
      this.paraminfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //商品评价
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
      })
    },
    detailImageLoad(){
      this.titleY = []
      this.titleY.push(0)
      this.titleY.push(this.$refs.params.$el.offsetTop)
      this.titleY.push(this.$refs.comments.$el.offsetTop)
      this.titleY.push(this.$refs.recommends.$el.offsetTop)
      this.titleY.push(Number.MAX_VALUE)
      console.log(this.titleY)
    },
    titleClick(index){
      this.$refs.bscroll.bScroll.scrollTo(0,-(this.titleY[index]),100)
    },
    contentScroll(position){
     // console.log(position);
     const y = -(position.y)

     //方法1
     //先对高度的数据进行遍历
     //for(let i in this.titleY){}//这种方法得到的i是字符串，可以用最简单的方法取i
     /* let length = this.titleY.length
     for(let i = 0; i < length; i++){
       if (i < length - 1 && y >= this.titleY[i] && y < this.titleY[i+1]){
         //console.log(i);
         this.$refs.detailnavbar.currentIndex = i
       }else if(i === length - 1 && y >= this.titleY[i]){
         this.$refs.detailnavbar.currentIndex = i
         //console.log(i);
       }
     } */

     //方法2
     //在高度的数组里面加入一个特别大的数值，省去一次判断，Number.MAX_VALUE
     let length = this.titleY.length
     for(let i = 0; i < length-1; i++){
       if (this.$refs.detailnavbar.currentIndex !== i && y >= this.titleY[i] && y < this.titleY[i+1]){
         console.log(i);
         this.$refs.detailnavbar.currentIndex = i
       }
     }

    }
  },
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-wrapper{
  height: calc(100% - 44px);
}

</style>