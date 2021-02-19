<template>
  <div>
    <ul class="home-recommend">
      <li v-for="(item,index) in recommend" :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"HomeRecommend",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.home-recommend{ 
  /* background-color:#cf4; */
  display: flex;
  text-align: center;
  padding: 15px 0;
  margin: 0;
  box-shadow: 0 10px #ddd;
}
.home-recommend li{
  list-style: none;
  flex:1;
  font-size: 14px;
  
}
.home-recommend li a{
  color: #222;
}
.home-recommend li img{
  width:90%;
}
</style>