<template>
  <div id="profile">
    <b-scroll class="profile-wrapper">
      <user></user>
      <profile-order></profile-order>
      <profile-member></profile-member>
      <div>
        <div class="more">更多推荐</div>
        <recommend-list :recommends="recommends"></recommend-list>
      </div>
      
    </b-scroll>
    
  </div>
</template>

<script>
import User from './User'
import ProfileOrder from './ProfileOrder'
import ProfileMember from './ProfileMember'
import RecommendList from 'components/content/RecommendList.vue'
import BScroll from "components/common/BScroll"

import {getRecommend} from 'network/detail.js'
export default {
  name: 'Profile',
  data(){
    return{
      recommends:[]
    }
  },
  components:{
    User,
    ProfileOrder,
    ProfileMember,
    RecommendList,
    BScroll
  },
  created(){
    getRecommend().then(res => {
      this.recommends = res.data.list
      console.log(this.recommends)
    })
  },
}
</script>

<style scoped>
#profile{
  background-color: #eee;
  height: 100vh;
}
.profile-wrapper{
  height: 100vh;
}
.more{
  margin-top: 10px;
  border-radius: 10px;
  text-align:center;
  background-color: #fff;
  padding: 10px;
}
</style>
