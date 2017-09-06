<template>
    <div class="book">
        <bookHeader></bookHeader>
        <div class="book__btn">
            <div class="book__block"  :class="{modified:is_hot==1}">
                <router-link tag="span" @click.native="hot_change"  class="book__title" to="/bookName/1" append>畅销书单</router-link>
            </div>
            <div class="book__block"  :class="{modified:is_hot==2}">
                <router-link tag="span" @click.native="new_change"  class="book__title" to="/bookName/2" append>本月书单</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import bookHeader from '@/components/bookHeader/bookHeader'
export default {
    name: 'book',
    data: function() {
        return {
            is_hot: 1
        }
    },
    components: {
        bookHeader
    },
    methods: {
        hot_change(e) {
            this.is_hot = 1
        },
        new_change(){
            this.is_hot = 2
        }
    }
}
</script>

<style lang='scss' scoped type='text/css'>
@import './book.scss';
</style>