<template>
  <div id="app">
    <router-view></router-view>
    <footer-shop></footer-shop>
  </div>
</template>

<script >
require('@/assets/js/reactive.js');
import footerShop from '@/components/footer/footer';
export default {
  name: 'app',
  components:{
    footerShop
    }
}
</script>

<style lang="scss"  type="text/css">
  @import './assets/indexCommon.scss';
  html,body,#app{
    width: 100%;
    height: 100%;
    background:$light-gray;
  }
</style>
