<template>
    <div v-if="isHomePage === 'true'" id="left-section">
        <movies-update></movies-update>
        <movie-cate
            limit_numb='8'
            is_home_page='true'
            category_id='5dafece519e21943a17739c4'
            is_search_page='false'>
        </movie-cate>
        <movie-cate
            limit_numb='8'
            is_home_page='true'
            category_id='5dafedfcafbe1e491221fe45'
            is_search_page='false'>
        </movie-cate>
        <movie-cate
            limit_numb='8'
            is_home_page='true'
            category_id='5dafedfcafbe1e491221fe49'
            is_search_page='false'>
        </movie-cate>
    </div>
    <div v-else id="left-section">
        <movie-cate
            limit_numb='20'
            is_home_page='false'
            :is_search_page='isSearchPage'>
        </movie-cate>
    </div>
</template>

<script>
    import moviesUpdate from './moviesUpdate/moviesUpdate';
    import moviesByCategory from './moviesByCategory/moviesByCategory';

    export default {
        name: 'left-section',
        props: ['is_home_page', 'is_search_page'],
        data () {
            return {
                isHomePage: this.is_home_page,
                isSearchPage: this.is_search_page
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
