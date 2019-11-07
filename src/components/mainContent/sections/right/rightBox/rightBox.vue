<template>
    <div class="right-box">
        <div class="right-box-title">
            <div class="title">{{title}}</div>
        </div>
        <div class="right-box-content nice-scroll">
            <div class="content-wrapper">
                <a 
                    v-for="movie in movies"
                    :key="movie._id"
                    href="#" 
                    :data-target="movie._id"
                    class="movie-detail-link">
                    <div class="movie-link movie-thumb-sm">
                        <img :src="'http://localhost:3000'+movie.thumbnail" :alt="movie.title_vn" class="figure">
                        <div class="movie-info">
                            <p class="movie-title-vn">{{movie.title_vn}}</p>
                            <p class="movie-title-en">{{movie.title_en}}</p>
                            <p class="views">Lượt xem: {{movie.trailer_views}} lượt</p>
                            <div class="star-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'RightBox',
        props: ['list_title', 'list_type', 'list_url'],
        data () {
            return {
                movies: [],
                getMoviesUrl: this.list_url,
                title: this.list_title,
                type: this.list_type,
                limit: 8
            }
        },
        methods: {
            
        },
        mounted() {
            getMovieDetails();
            try {
                axios.get(`http://localhost:3000${this.getMoviesUrl}?limit=${this.limit}`)
                .then(res => {
                    this.movies = res.data.movies;
                });
            } catch (error) {
                console.log(error); 
            }
        },
        updated() {
            getMovieDetails();
        }
    }
</script>

<style>

</style>
