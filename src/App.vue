<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"  v-if="$route.meta.keepAlive"/>
      </keep-alive>
        <component :is="Component"  v-if="!$route.meta.keepAlive"/>
    </router-view> 
    <!-- <router-view></router-view> -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'
export default {
  name:'#app',
  components:{
    MainTabBar
  }
}
</script>

<style>
</style>
