<template>
    <div class="book">
        <bookHeader></bookHeader>
        <div class="book__btn">
            <div class="book__block" @click="hot_change" >
            <router-link tag="span" class="book__title" to="/bookName/1" append>畅销书单</router-link> 
            </div>
            <div class="book__block" @click="hot_change" >
            <router-link tag="span" class="book__title" to="/bookName/2" append>本月书单</router-link> 
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import bookHeader from '@/components/bookHeader/bookHeader'
export default{
    name: 'book',
    data(){
        return {
            is_hot:false,
            is_now:false
        }
    },
    components:{
        bookHeader
    },
    methods:{
            hot_change(e){
                
            }
    }
}
</script>

<style lang='scss' scoped type='text/css'>
@import './book.scss';
</style>