<template>
<div class="footer">
    <router-link to="/" tag="li"  class="footer__select iconfont">&#xe60e;</router-link>
    <router-link to="/a?ref=cc" tag="li" class="footer__select iconfont">&#xe639;</router-link>
    <router-link to="/c" tag="li" class="footer__select iconfont">&#xe611;</router-link>
</div>  
</template>

<script>
export default{
    name: 'footer'
}
</script>

<style lang='scss' scoped type='text/css'>
@import '../../assets/indexCommon.scss';
.footer{
    width: 100%;
    height: C(80);
    line-height: C(80);
    display: flex;
    padding: 0 C(60);
    justify-content: space-between;
    background: $light-blue;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    @include e("select"){
        color: #fff;
        font-size: C(40);
    }
}
</style>