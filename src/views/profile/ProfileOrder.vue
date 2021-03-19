<template>
  <div class="order">
    <div>
      <span class="my-order">我的订单</span>
    </div>
    <ul class="message">
      <li>
        <i class="fas fa-wallet"></i>
        <span>待付款</span>
      </li>
      <li>
        <i class="fas fa-archive"></i>
        <span>待发货</span>
      </li>
      <li>
        <i class="fas fa-truck"></i>
        <span>待收货</span>
      </li>
      <li>
        <i class="fas fa-comment-dots"></i>
        <span>待评价</span>
      </li>
      <li>
        <i class="fas fa-yen-sign"></i>
        <span>退款/售后</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'ProfileOrder',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
@import "~assets/css/fontawesome/css/all.css";
.order{
  margin: 10px 0;
  padding-top: 10px;
  border-radius: 10px;
  height: 90px;
  background-color: #fff;
}
.my-order{
  margin-left: 10px;
  font-size:16px;
  font-weight: 500;
}
.message{
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
li{
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>