<template>
    <div class="tab-content nice-scroll">
        <div id="list1" class="tab-pane active">
            <movie-item-sm
                v-for="movie in movies"
                :key="movie._id"
                :movie_id="movie._id"
                :thumbnail="movie.thumbnail"
                :time="movie.time"
                :title_vn="movie.title_vn"
                :title_en="movie.title_en"></movie-item-sm>
        </div>
        <div id="list2" class="tab-pane fade">
            <movie-item-sm
                v-for="movie in series"
                :key="movie._id"
                :movie_id="movie._id"
                :thumbnail="movie.thumbnail"
                :time="movie.time"
                :title_vn="movie.title_vn"
                :title_en="movie.title_en"></movie-item-sm>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import movieItemSmall from '../../../../movieItem/movieItemSmall';

    export default {
        name: 'movies-tab',
        data () {
            return {
                movies: [],
                series: [],
                getMoviesUrl: '/movie/movies',
                getSeriesUrl: '/movie/series'
            }
        },
        methods: {
            
        },
        components: {
            'movie-item-sm': movieItemSmall
        },
        mounted() {
            try {
                axios.get('http://localhost:3000' + this.getMoviesUrl)
                .then(res => {
                    this.movies = res.data.movies;
                    getMovieDetails();
                });
                axios.get('http://localhost:3000' + this.getSeriesUrl)
                .then(res => {
                    this.series = res.data.movies;
                    getMovieDetails();
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>

<style>

</style>
