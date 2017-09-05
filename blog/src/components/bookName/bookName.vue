<template>
    <div class="book-name">
        {{ $route.params.id }}
    </div>
</template>

<script>
export default {
    name: 'bookName',
    data() {
        return {
            ms:'data'
        }
    },
    methods:{
        get_books() {
             this.axios.get(`http://localhost:3000/books/${this.$route.params.id}`)
             .then(function(res) {
                console.log(res.data);
            }).catch(function(err) {
                console.log(err);
            })
        }
    },
    beforeMount(){
        this.get_books();
    },
    watch:{
        '$route' (to,from){
            if(to.params.id!=from.params.id){
                this.get_books();
            }
        }
    }
}
</script>

<style lang='scss' scoped type='text/css'>
@import '../../assets/indexCommon.scss';
.book-name {
    font-size: C(32);
}
</style>