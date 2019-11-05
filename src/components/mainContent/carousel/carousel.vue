<template>
    <div id="carousel">
        <div class="section-title">PHIM ĐỀ CỬ</div>
        <hr>
        <div class="top-movie-list">
            <a href="#" class="prev-btn">
                <span class="arrow-icon"></span>
            </a>
            <a href="#" class="next-btn">
                <span class="arrow-icon"></span>
            </a>
            <div class="top-movie-wrapper">
                <movie-item-bg
                    v-for="movie in movies"
                    :key="movie._id"
                    :movie_id="movie._id"
                    :thumbnail="movie.thumbnail"
                    :time="movie.time"
                    :title_vn="movie.title_vn"
                    :title_en="movie.title_en"></movie-item-bg>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import movieItemBig from '../../movieItem/movieItemBig';

    export default {
        name: 'carousel',
        data () {
            return {
                movies: [],
                getMoviesUrl: '/movie/new-movies'
            }
        },
        methods: {
            
        },
        components: {
            'movie-item-bg': movieItemBig
        },
        created() {
            try {
                axios.get(`http://localhost:3000${this.getMoviesUrl}?limit=16`)
                .then(res => {
                    this.movies = res.data.movies;
                    getMovieDetails();
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>

<style>
    #main .carousel {
        width: 100%;
        height: 330px;
        background-color: #252525;
        padding: 10px 20px;
    }
</style>
