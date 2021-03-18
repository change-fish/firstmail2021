<template>
  <div class="user">
    <div class="picture"></div>
    <div class="name">
      <span>登录</span>
      <span>|</span>
      <span>注册</span>
    </div>
    <div class="detail-message">
      <i class="fas fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'User'
}
</script>

<style scoped>
@import "~assets/css/base.css";
.user{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px 0;
  background-color:var(--color-high-text);
  color: #fff;
}
.picture{
  width: 50px;
  height: 50px;
  margin: 0 10px;
  background-image: url(~assets/img/profile-picture.jpg);
  background-repeat: no-repeat;
  background-size:50px;
  border-radius:50px ;
}
.name{
  display: flex ;
  font-size: 16px;
  align-items: center;
  flex: 1;
}
span{
  padding: 5px;
}
.detail-message{
  width: 50px;
}
</style>