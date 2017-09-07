import bookName from '@/components/bookName/bookName.vue'
export default [
    {
        path:'/:bookname/:id',
        name:'book-name',
        component:bookName,
    }
]