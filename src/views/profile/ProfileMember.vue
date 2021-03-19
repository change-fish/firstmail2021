<template>
  <div class="member">
    <div class="member-corner">
      <ul>
        <li>会员中心</li>
        <li>会员积分快速提升</li>
      </ul>
      <img src="~assets/img/vip.jpg" alt="">
    </div>
    <div class="member-corner">
      <ul>
        <li>红包卡券</li>
        <li>签到领红包</li>
      </ul>
      <img src="~assets/img/redenvelope.jpg" alt="">
    </div>
    <div class="member-corner">
      <ul>
        <li>装扮</li>
        <li>免费抽人气装扮</li>
      </ul>
      <img src="~assets/img/skin.jpg" alt="">
    </div>
    <div class="member-corner">
      <ul>
        <li>客服中心</li>
        <li>一键召唤服务</li>
      </ul>
      <img src="~assets/img/service.png" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  name:'ProfileMember'
}
</script>

<style scoped>
.member{
  height: 150px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  background-color: #fff;
  flex-wrap: wrap;
  justify-content: space-around;
}
.member-corner{
  display: flex;
  width: 45%;
  margin: 5px 0;
  align-items: center;
}
ul{
  padding: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}
li{
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 14px;
  font-weight: bolder;
}
li+li{
  font-size: 10px;
  font-weight:400;
}
img{
  border-radius: 50%;
  width: 30px;
  height: 40px;
}
</style>