<template>
  <div id="detail">
    <nav-bar>
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

    <detail-swiper :topImages="topImages" >
    </detail-swiper>
  </div>
</template>

<script>

import NavBar from 'components/common/NavBar.vue'
import DetailSwiper from './DetailSwiper.vue'

import {getGoodsDetail} from 'network/detail.js'

export default {
  name:'Detail',
  components:{
    NavBar,
    DetailSwiper,
  },
  data(){
    return {
      iid:null,
      titles:['商品','参数','评论','详情'],
      currentIndex:0,
      topImages:[],
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
      console.log(res);
      this.topImages = res.result.itemInfo.topImages
    })
    },
  }
}
</script>

<style scoped>

@import '~assets/css/fontawesome/css/all.css';

.detail{
  margin: 0;
  padding: 0;
  display: flex;
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