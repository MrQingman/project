<template>
    <div class="book">
        <bookHeader></bookHeader>
        <div class="book__btn">
            <div class="book__block" :class="{modified:is_hot==1}">
                <router-link tag="span" @click.native="hot_change" class="book__title" to="/hot_book/1" append>畅销书单</router-link>
            </div>
            <div class="book__block" :class="{modified:is_hot==2}">
                <router-link tag="span" @click.native="new_change" class="book__title" to="/new_book/1" append>本月书单</router-link>
            </div>
        </div>
        <transition name="fade">
            <keep-alive>
                <router-view v-finger:swipe="aa"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
import bookHeader from '@/components/bookHeader/bookHeader'
export default {
    name: 'book',
    data: function() {
        return {
            is_hot: 1,
            index: Number(this.$route.params.id) + 1
        }
    },
    components: {
        bookHeader
    },
    methods: {
        hot_change(e) {
            this.is_hot = 1
        },
        new_change() {
            this.is_hot = 2
        },
        aa(e) {
            alert(1);
            const _this = this;
            if (e.direction == "Left") {
                aler(1);
                _this.axios.get(`/#/${this.$route.params.bookname}/${this.index}`)
                    .then(function(res) {
                        _this.books = res.data.data;
                    }).catch(function(err) {
                        console.log(err);
                    })
            }
        }
    }
}
</script>

<style lang='scss' scoped type='text/css'>
@import './book.scss';
.fade-enter-active,
.fade-leave-active {
    transition: opacity 5.5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    opacity: 0
}
</style>