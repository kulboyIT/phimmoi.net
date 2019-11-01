<template>
    <div id="left-section">
        <movies-update></movies-update>
        <movie-cate
            category_title='hành động'
            category_id='5dafece519e21943a17739c4'>
        </movie-cate>
        <movie-cate
            category_title='kinh dị'
            category_id='5dafedfcafbe1e491221fe49'>
        </movie-cate>
        <movie-cate
            category_title='viễn tưởng'
            category_id='5dafedfcafbe1e491221fe45'>
        </movie-cate>
    </div>
</template>

<script>
    import moviesUpdate from './moviesUpdate/moviesUpdate';
    import moviesByCategory from './moviesByCategory/moviesByCategory';

    export default {
        name: 'left-section',
        data () {
            return {
                movies: [],
                getNewMoviesUrl: '/movie/new-movies'
            }
        },
        methods: {
            
        },
        components: {
            'movies-update': moviesUpdate,
            'movie-cate': moviesByCategory
        },
        mounted() {
            try {
                axios.get('http://localhost:3000' + this.getNewMoviesUrl)
                .then(res => {
                    this.movies = res.data;
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>

<style>

</style>
