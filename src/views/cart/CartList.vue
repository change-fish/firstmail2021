<template>
  <b-scroll class='wrapper'>
    <ul class="cart-list">
      <li v-for="(item,index) in list" :key="index" class="cart-item">
        <div class="check-box" @click="goodsChecked(item)">
          <i class="fas fa-check-circle" :class="{checked:item.checked}"></i>
        </div>
        <div class="cart-img">
          <img :src="item.image" alt="">
        </div>
        <div class="cart-message">
          <div class="cart-title">{{item.title}}</div>
          <div class="cart-desc">{{item.desc}}</div>
          <div class="cart-buy">
            <div class="price">{{item.price}}</div>
            <div class="count">×{{item.count}}</div>
          </div>
        </div>
      </li>
    </ul>
  </b-scroll>
</template>

<script>
import {mapGetters} from 'vuex'
import BScroll from 'components/common/BScroll.vue'
export default {
  name:'CartList',
  components:{
    BScroll,
  },
  data(){
    return {
      //isChecked:false,
    }
  },
  computed:{
    ...mapGetters({
      list:'cartList'//起别名为list
    })
  },
  methods:{
    goodsChecked(item){
      item.checked = !item.checked 
      //console.log(item)
    },
  },
}
</script>

<style scoped>

@import "~assets/css/base.css";

.wrapper{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.cart-list{
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: column;
}
.cart-item{
  border-top: solid #aaa 1px;
  list-style-type: none;
  height: 120px;
  /* overflow: hidden; */
  display: flex;
  padding: 0 10px;
  justify-content:center;
}
.check-box{
  flex: 1;
  margin: auto;
}
.fas{
  font-size: 16px;
  color: #fff;
  border:solid 1px #888;
  border-radius: 50%;
}
.checked{
  color: #f55;
  border:solid 1px #f55;
}
.cart-img{
  /* width: 80px;
  height: 80px; */
  overflow: hidden;
  flex: 3;
  margin: auto;
}
img{
  width: 60px;
}
.cart-message{
  display: flex;
  flex-flow:column;
  flex: 7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 15px 0;
}
.cart-title{
  font-size: 16px;
  flex: 1;
}
.cart-desc{
  font-size: 10px;
  flex: 1;
}
.cart-buy{
  display: flex;
  flex: 1;
}
.price{
  flex: 4;
  color: #f55;
} 
.count{
  flex:1;
  text-align: center;
}
</style>