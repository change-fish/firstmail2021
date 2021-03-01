<template>
  <div v-if="Object.keys(params).length !==0" class="params">
    <table v-for="(table,index) in params.sizes" :key="index"
           class="params-size">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="params-info">
      <tr v-for="(info,index) in params.info" :key="index">
        <td class="info-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-image" v-if="params.image.length !== 0">
      <img :src="params.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailParam',
  data(){
    return {
      params:{},
    }
  },
  props:{
    detailParam:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  watch: { 
    detailParam: { 
      handler(newVal){ 
        this.params = newVal; 
        console.log(newVal);
      }
    },
  }, 
  
}
</script>
<style scoped>
table{
  margin: 0 auto;
  width: 90%;
  border-collapse: collapse;
  font-size: 15px;
}
tr{
  padding: 5px;
  vertical-align: middle;
  text-align: center;
  color: #333;
  display: flex;
  border-bottom: solid #bbb 1px;
}
td{
  flex: 1;
}
</style>