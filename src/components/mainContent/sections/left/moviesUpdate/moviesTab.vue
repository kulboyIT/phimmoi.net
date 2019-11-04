<template>
    <div class="tab-content nice-scroll">
        <div id="list1" class="tab-pane active">
            <a 
                v-for="movie in movies"
                :key="movie._id"
                href="#" 
                :data-target="movie._id"
                class="movie-detail-link">
                <div class="movie-link movie-thumb-sm">
                    <img class="figure" :src="'http://localhost:3000'+movie.thumbnail" :alt="movie.title_vn">
                    <div class="movie-info">
                        <p class="movie-title-vn">{{movie.title_vn}}</p>
                        <p class="movie-title-en">{{movie.title_en}}</p>
                    </div>
                    <div class="time">{{movie.time}} phút</div>
                </div>
            </a>
        </div>
        <div id="list2" class="tab-pane fade">
            <a 
                v-for="movie in series"
                :key="movie._id"
                href="#" 
                :data-target="movie._id"
                class="movie-detail-link">
                <div class="movie-link movie-thumb-sm">
                    <img class="figure" :src="'http://localhost:3000'+movie.thumbnail" :alt="movie.title_vn">
                    <div class="movie-info">
                        <p class="movie-title-vn">{{movie.title_vn}}</p>
                        <p class="movie-title-en">{{movie.title_en}}</p>
                    </div>
                    <div class="time">{{movie.time}} phút</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

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
