<template>
  <div id="category">  
      <nav-bar class="nav">
        <template v-slot:center>
          <div class="search">
            <i class="fas fa-search"></i>
            <input type="text" class="input">
          </div>
        </template>
      </nav-bar>
      <div class="wrapper">
        <category-sort-bar :sortbartitles="titles" @sortClick="sortBarClick"></category-sort-bar>
        <b-scroll class="category-wrapper">     
          <category-sort-list :categorySortList="sortList" @listClick="listClick"></category-sort-list>
        </b-scroll>
      </div>
  </div>  
</template>

<script>
import CategorySortBar from './CategorySortBar'
import CategorySortList from './CategorySortList'
import NavBar from 'components/common/NavBar'
import BScroll from 'components/common/BScroll'

import {getCategory,getSubCategory} from 'network/category'
export default {
  name: 'Category',
  components:{
    BScroll,
    NavBar,
    CategorySortBar,
    CategorySortList,
  },
  data(){
    return{
      titles:[],
      maitKey:[],
      miniWallkeyIndex:0,
      //在store内定义一个相同的数组，分类详情页使用
      //miniWallkey:[],
      sortList:[]
    }
  },
  created(){
    //获取导航栏名称和对应的接口值
    this.category()
  },
  methods:{
    category(){
      getCategory().then(res => {
        //console.log(res);
        let titles = []//解决watch无法监听this.titles的变化问题，由于js限制，可能无法监听数组长度的变化
        let maitKey = []
        let miniWallkey = []
        for(let item of res.data.category.list){
          titles.push(item.title)
          maitKey.push(item.maitKey)
          miniWallkey.push(item.miniWallkey)
        } 
        this.titles = titles
        this.maitKey = maitKey
        //this.miniWallkey = miniWallkey
        
        //获取第一个标题的数据并传递给子组件展示
        this.subCategory(0)

        //将miniWallkey放到vuex上
        this.$store.dispatch('categoryminiWallkey',miniWallkey)
      })
      
    },

    //获取各标题具体数据的函数，maitKey接口
    subCategory(index){
      
      //将标题对应的index传递给miniWallkey
      this.miniWallkeyIndex = index

      //获取标题对应的的分类list
      getSubCategory(this.maitKey[index]).then(res => {
          //console.log(res.data.list);
          let sortList = []
          for(let item of res.data.list){
            sortList.push(item)
          } 
          this.sortList = sortList
        })
    },

    //点击切换标题和对应内容的函数
    sortBarClick(index){
      this.subCategory(index)
    },
    //sortlist点击对应跳转到categorydetail页面，这里将对应的miniWallkey传递到vuex
    listClick(){
      //将对应的index放到vuex上
      let index = this.miniWallkeyIndex
      this.$store.dispatch('categoryminiWallkeyIndex',index)
    },
  },
}
</script>

<style scoped>
@import "~assets/css/base.css";

#category{
  height: 100vh;
}
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
/* .sort{
  width: 60px;
  height: calc(100% - 44px - 40px);
} */
.category-wrapper{
  flex: 1;
  background-color: #fff;
  height: 500px;
  overflow-y: scroll;
}
</style>
