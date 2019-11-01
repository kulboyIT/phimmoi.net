<template>
    <div class="movie-cate">
        <div class="movie-cate-header">
            <div class="section-title">phim {{categoryTitle}} MỚI</div>
            <a class="more-btn" href="">Xem tất cả ></a>
        </div>
        <hr>
        <div class="movie-cate-list">
            <div class="row">
                <ul>
                    <li
                        v-for="movie in movies"
                        :key="movie._id">
                        <a href="#" :data-target="movie._id" class="movie-detail-link">
                            <div class="movie-link movie-thumb-md" :title="movie.title">
                                <img class="thumb-bg" :src="'http://localhost:3000'+movie.thumbnail" :alt="movie.title_vn">
                                <div class="movie-info">
                                    <div class="movie-title-vn">{{movie.title_vn}}</div>
                                    <div class="movie-title-en">{{movie.title_en}}</div>
                                </div>
                                <div class="time">{{movie.time}} phút</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'movie-cate',
        props: ['category_title', 'category_id'],
        data () {
            return {
                movies: [],
                getMoviesUrl: '/movie/category',
                categoryTitle: this.category_title,
                categoryId: this.category_id
            }
        },
        methods: {
            
        },
        mounted() {
            try {
                axios.get(`http://localhost:3000${this.getMoviesUrl}/${this.categoryId}?limit=8`)
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

</style>
