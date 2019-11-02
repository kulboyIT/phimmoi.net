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
                <a href="#"
                    v-for="movie in movies"
                    :key="movie._id"
                    :data-target="movie._id"
                    class="movie-detail-link">
                    <div class="movie-link movie-thumb-big" :title="movie.title_vn">
                        <img class="thumb-bg" :src="'http://localhost:3000'+movie.thumbnail" :alt="movie.title_vn">
                        <div class="movie-info">
                            <div class="movie-title-vn">{{movie.title_vn}}</div>
                            <div class="movie-title-en">{{movie.title_en}}</div>
                        </div>
                        <div class="time">{{movie.time}} phút</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

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
        mounted() {
            try {
                axios.get(`http://localhost:3000${this.getMoviesUrl}?limit=16`)
                .then(res => {
                    this.movies = res.data;
                    getMovieDetails();
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>

<style>
    .main .carousel {
        width: 100%;
        height: 330px;
        background-color: #252525;
        padding: 10px 20px;
    }
</style>
