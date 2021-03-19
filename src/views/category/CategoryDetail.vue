<template>
 <div id="category-detail">
  <nav-bar class="nav">
    <template v-slot:left>
        <i class="fas fa-angle-left" @click="iClick"></i>
      </template>
    <template v-slot:center>
      <div class="detail">分类</div>
    </template>
  </nav-bar>
  <b-scroll class="goods-wrapper">
    <recommend-list :recommends="goods"></recommend-list>
  </b-scroll>
 </div>
  
</template>

<script>
import NavBar from 'components/common/NavBar'
import BScroll from "components/common/BScroll"
import RecommendList from 'components/content/RecommendList.vue'
import {getSubCategoryDetail} from 'network/category'
export default {
  name:'CategoryDetail',
  components:{
    NavBar,
    BScroll,
    RecommendList,
  },
  data(){
    return{
      index:0,
      keys:[],
      goods:[]
    }
  },
  created(){
    this.index = this.$store.state.miniWallkeyIndex
    this.keys = this.$store.state.miniWallkey
    //console.log(this.keys);
    this.categoryDetail()
  },

  methods:{
    categoryDetail(){
      let keys = this.keys
      let index = this.index
      //console.log(keys[index]);
      getSubCategoryDetail(keys[index]).then(res => {
        //console.log(res)
        this.goods = res
      })
    },

    iClick(){
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>

@import '~assets/css/fontawesome/css/all.css';

#category-detail{
  height: 100vh;
}
.nav{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  background-color: #f55;
  color: #fff;
}
.fas{
  margin-top: 13px;
}
.goods-wrapper{
  margin-top: 44px;
  height: calc(100% - 44px);
}
/* .detail{
  width: 100%;
} */
</style>