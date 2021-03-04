<template>
  <div v-if="Object.keys(comment).length !== 0" class="comment-info">
    <div class="comment-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>

    <div class="comment-user">
      <img :src="comment.user.avatar" alt="">
      <span>{{comment.user.uname}}</span>
    </div>
  
    <div class="comment-detail">
      <p>{{comment.content}}</p>
      <div class="comment-other">
        <span class="data">{{getDate(comment.created)}}</span>
        <span>{{comment.style}}</span>
      </div>
      <div class="comment-image">
        <img :src="item" alt="" v-for="(item,index) in comment.images" :key="index">
      </div>
    </div>
  </div>
  <div v-else class="nocomment">用户评价(0)</div>
</template>

<script>
import {formatDate} from 'common/utils.js'
export default {
  name:"DetailComment",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      comment:{}
    }
  },
  watch:{
    commentInfo: { 
      handler(newVal){ 
        this.comment = newVal
        //console.log(this.comment)
      }
    },
  },
  methods:{
    getDate(value){
      //1.将时间转换成Data对象
      const date = new Date(value * 1000)
      
      //2.将Data进行格式化，函数在utils.js文件中
      return  formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }
  
}
</script>

<style scoped>
.comment-header{
  padding: 10px;
  height: 30px;
  display: flex;
  margin-top: 10px;
  border-top: solid #ccc 1px;
  color: #333;
}
.header-title{
  flex: 1;
}
.comment-user{
  color: #333;
  height: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
}
.comment-user img{
  margin: 0 15px;
  width: 25px;
  border-radius: 50%;
  border: solid 1px #ccc;
}
.comment-user span{
  font-size: 15px;
}
.comment-detail{
  font-size: 15px;
}
.comment-other{
  font-size: 12px;
}
.data{
  margin-right: 10px;
}
.nocomment{
  padding: 10px;
  display: flex;
  margin-top: 10px;
  border-top: solid #ccc 1px;
  color: #333;
  height: 20px;
  font-size: 15px;
}
</style>