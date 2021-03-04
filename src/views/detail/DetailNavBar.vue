<template>
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
</template>
<script>

import NavBar from 'components/common/NavBar.vue'

export default {
  name:'DetailNavBar',
  data(){
    return {
      titles:['商品','参数','评论','详情'],
      currentIndex:0,
    }
  },
  components:{
    NavBar,
  },
  methods:{
    iClick(){
      this.$router.go(-1)
    },
    detailClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
  }
}
</script>

<style scoped>
@import '~assets/css/fontawesome/css/all.css';

.detail-nav{
  position: relative;
  z-index: 10;
  background-color: #fff;
}
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