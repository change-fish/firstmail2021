<template>
  <div id="detail">
    <nav-bar class="detail-nav">
      <template v-slot:left>
        <i class="fas fa-angle-left" @click="iClick"></i>
      </template>
      <template v-slot:center>
        <ul class="detail">
          <li v-for="(item,index) in titles" :key="index"
          :class="{active: index === currentIndex}"
          @click="detailClick(index)">{{item}}</li>
        </ul>
      </template>
    </nav-bar>

    <b-scroll class="detail-wrapper">
      <detail-swiper :topImages="topImages" ></detail-swiper>

      <detail-info :goods="goods"></detail-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-images :detailInfo="detailInfo"></detail-images>
      <detail-param :detailParam="paraminfo"></detail-param>
    </b-scroll>
  </div>
</template>

<script>

import NavBar from 'components/common/NavBar.vue'
import BScroll from 'components/common/BScroll.vue'

import DetailSwiper from './DetailSwiper.vue'
import DetailInfo from './DetailInfo.vue'
import DetailShop from './DetailShop.vue'
import DetailImages from './DetailImages.vue'
import DetailParam from './DetailParam.vue'

import {getGoodsDetail,Goods,Shop,GoodsParam} from 'network/detail.js'

export default {
  name:'Detail',
  components:{
    NavBar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    BScroll,
    DetailImages,
    DetailParam,
  },
  data(){
    return {
      iid:null,
      titles:['商品','参数','评论','详情'],
      currentIndex:0,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},//商品具体图片
      paraminfo:{}//商品的参数
    }
  },
  created(){
    //拿到route里的路径的id
    this.iid = this.$route.params.id

    this.getDetail(this.iid)
    
  },
  methods:{
    iClick(){
      this.$router.go(-1)
    },
    detailClick(index){
      this.currentIndex = index
    },
    getDetail(id){
      getGoodsDetail(id).then(res => {
        //console.log(res);
      const data = res.result
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
      })
    },
  },
}
</script>

<style scoped>

@import '~assets/css/fontawesome/css/all.css';

#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail{
  margin: 0;
  padding: 0;
  display: flex;
}
.detail-nav{
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.detail-wrapper{
  height: calc(100% - 44px);
}
li{
  list-style-type: none;
  flex: 1;
  color: #333;
  font-size: 14px;
}
.active{
 color:#f55;
}
.fas{
  color: #333;
  margin-top: 13px;
}
</style>