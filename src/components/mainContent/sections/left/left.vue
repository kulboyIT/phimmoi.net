<template>
    <div id="left-section">
        <div v-if="isHomePage==='true'">
            <movies-update></movies-update>
            <movie-cate
                category_title='hành động'
                category_id='5dafece519e21943a17739c4'
                limit_numb='8'>
            </movie-cate>
            <movie-cate
                category_title='kinh dị'
                category_id='5dafedfcafbe1e491221fe49'
                limit_numb='8'>
            </movie-cate>
            <movie-cate
                category_title='viễn tưởng'
                category_id='5dafedfcafbe1e491221fe45'
                limit_numb='8'>
            </movie-cate>
        </div>
        <div v-else>
            <movie-cate
                category_title='viễn tưởng'
                category_id='5dafedfcafbe1e491221fe45'
                limit_numb='20'>
            </movie-cate>
        </div>
    </div>
</template>

<script>
    import moviesUpdate from './moviesUpdate/moviesUpdate';
    import moviesByCategory from './moviesByCategory/moviesByCategory';

    export default {
        name: 'left-section',
        props: ['is_home_page'],
        data () {
            return {
                isHomePage: this.is_home_page
            }
        },
        methods: {
            
        },
        components: {
            'movies-update': moviesUpdate,
            'movie-cate': moviesByCategory,
        }
    }
</script>

<style>

</style>
