<template>
  <div class="category">  
      <nav-bar class="nav">
        <template v-slot:center>
          <div class="search">
            <i class="fas fa-search"></i>
            <input type="text" class="input">
          </div>
          </template>
      </nav-bar>
      <div class="wrapper">
        <sort-bar class="sort" :titles="titles"></sort-bar>
        <b-scroll class="category-wrapper">     
          <sort-list></sort-list>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </b-scroll>
      </div>
  </div>  
</template>

<script>
import SortBar from './SortBar'
import SortList from './SortList'
import NavBar from 'components/common/NavBar'
import BScroll from 'components/common/BScroll'

import {getCategoryData} from 'network/category'
export default {
  name: 'Category',
  components:{
    BScroll,
    NavBar,
    SortBar,
    SortList,
  },
  data(){
    return {
      /* '流行','上衣','裤子','裙子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护','家居','百货','母婴','食品', */
      titles:['流行','上衣','裤子','裙子','内衣'],
      sorts:{
        pop:{ page: 0, list: [] },
        coat:{ page: 0, list: [] },
        jeans:{ page: 0, list: [] },
        dress:{ page: 0, list: [] },
        sweater:{ page: 0, list: [] },
        shirt:{ page: 0, list: [] },
        skirt:{ page: 0, list: [] },
        suit:{ page: 0, list: [] },
        shoes:{ page: 0, list: [] },
        accessories:{ page: 0, list: [] },
        overcoat:{ page: 0, list: [] },
      },
    }
  },
  create(){
    this.categoryData()
  },
  methods:{
    categoryData(){
      getCategoryData().then((res) => {
        console.log(res);
      })
    },
  },
}
</script>

<style scoped>
@import "~assets/css/base.css";
.nav{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  background-color: #f55;
}
.search{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
}
.fas{
  background-color: #fff;
  color: #555;
  width: 20px;
  height: 25px;
  margin: 0;
  padding-left: 5px;
  border: none;
  line-height: 25px;
  font-size: 14px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
.input{
  flex: 1;
  height: 25px;
  border: none;
  outline: none;
  padding: 0;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
.wrapper{
  margin-top: 44px;
  display: flex;
  flex-direction: row;
}
.sort{
  width: 60px;
}
.category-wrapper{
  flex: 1;
  background-color: #fff;
  height: 500px;
  overflow-y: scroll;
}
</style>
