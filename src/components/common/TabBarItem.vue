<template>
      <div class="tab-bar-item" :class="{active: isActive}" @click="itemClick"> 
        <div :class="{active: isActive}"> 
          <slot name="item-icon"></slot>
        </div>
         <slot name="item-text"></slot>
      </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  //这里传入当前组件的路径
  props:{
    path:String
  },
  data(){
    return{
      //isActive:false,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods:{
    itemClick(){
      //this.isActive = true
      //console.log('object');
      this.$router.replace(this.path).catch(err => err)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 15px;
  color: #555;
}
.active{
  color:var(--color-high-text);
}
</style>
