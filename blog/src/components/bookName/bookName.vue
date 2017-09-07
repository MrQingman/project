<template>
    <div >
        <div class="book-name">
            <div v-for="item in books" class="book-name__block">
                <div class="book-name__img">
                    <img :src="item.img" alt="">
                </div>
                <p class="book-name__titile">{{item.title}}</p>
                <p class="book-name__notice">{{item.notice}}</p>
            </div>
           
        </div>
         <ul class="book-name__btn">
             <router-link tag="li" to=" " ></router-link>
             <router-link tag="li" to=" " ></router-link>
             <router-link tag="li" to=" " ></router-link>    
         </ul>
    </div>
</template>

<script>
export default {
    name: 'bookName',
    data() {
        return {
            books: ''
        }
    },
    methods: {
        get_books() {
            const _this = this;
            this.axios.get(`http://192.168.251.37:3000/${this.$route.params.bookname}/${this.$route.params.id}`)
                .then(function(res) {
                    _this.books=res.data.data;
                }).catch(function(err) {
                    console.log(err);
                })
        }

    },
    beforeMount() {
        this.get_books();
    },
    watch: {
        '$route':'get_books'
    }
}
</script>

<style lang='scss' scoped type='text/css'>
@import '../../assets/indexCommon.scss';
.book-name {
    font-size: C(32);
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    @include e("block") {
        margin-top: C(40);
    }
    @include e("img") {
        width: C(200);
        height: C(250);
        overflow: hidden;
        >img {
            width: C(214);
        }
    }
    @include e("titile") {
        font-size: C(26);
        color: #444;
        padding-top: C(10);
    }
    @include e("notice") {
        padding-top: C(10);
        font-size: C(24);
        color: #666;
    }
}
</style>