<template>
<div class="settle-bar">
  <div class="check-box" @click="checked">
    <i class="fas fa-check-circle" :class="{checked:isSelectAll}"></i>
    <span>全选</span>
  </div>
  <div class="total-price">总计:￥{{totalPrice}}</div>
  <div class="settle">去结算({{settleLength}})</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'CartSettleBar',
  data(){
    return {
      //settleChecked:false,
    }
  },
  computed:{
    ...mapGetters({
      list:'cartList'//起别名为list
    }),
    totalPrice(){
      return this.list.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        let price = parseFloat(item.price.match(/(\d+)\.(\d+)/ig)[0])
        //console.log(price)
        return preValue + price * item.count
      },0).toFixed(2)
    },
    settleLength(){
     return this.list.filter(item => item.checked).length
    },
    isSelectAll(){
      /* if(this.$store.state.cartList.find(item => !item.checked)){
        //使用find函数找到数组中的未被选中的商品
        return false
      } */
      if (this.list.length === 0){
        return false
      } 
      for(let item of this.list){
        if(!item.checked){
          return false
        }
      }
      return true
    },
  },
  methods:{
    checked(){
      //this.settleChecked = !this.settleChecked
      if(this.isSelectAll){//全部选中改为全部不选中
        this.list.forEach(item => item.checked = false)
      }else{//没有全部选中时改为全部选中
        this.list.forEach(item => item.checked = true)
      }
    },
  },
  
}
</script>

<style scoped>
@import "~assets/css/base.css";
.settle-bar{
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  background:#ddd;
}
.check-box{
  width: 70px;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
}
.fas{
  margin: 0;
  font-size: 16px;
  color: #fff;
  border:solid 1px #888;
  border-radius: 50%;
}
.checked{
  color: #f55;
  border:solid 1px #f55;
}
.total-price{
  flex: 1;
  margin: auto;
}
.settle{
  width: 80px;
  height: 40px;
  color:#fff;
  background-color: #f55;
  display: flex;
  justify-content:center;
  align-items: center;
}
</style>