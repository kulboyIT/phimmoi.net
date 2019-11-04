<template>
    <div class="movie-cate">
        <div class="movie-cate-header">
            <div class="section-title">{{listTitle}}</div>
            <a v-if="is_home_page === 'true'" class="more-btn" href="">Xem tất cả ></a>
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
        props: ['limit_numb', 'is_home_page', 'category_id', 'is_search_page'],
        data () {
            return {
                movies: [],
                getMoviesUrl: '/movie/movies',
                listTitle: 'phim',
                limit: this.limit_numb,
                isHomePage: this.is_home_page,
                categoryId: this.category_id,
                isSearchPage: this.is_search_page
            }
        },
        methods: {

        },
        created() {
            if (this.isHomePage === 'true') {
                this.getMoviesUrl = `http://localhost:3000/movie/category/${this.categoryId}?limit=${this.limit}`;
            } else if(this.isSearchPage === 'true') {
                this.getMoviesUrl = `http://localhost:3000${this.$route.path}?keyword=${this.$route.query.keyword}&limit=${this.limit}`;
            } else {
                this.getMoviesUrl = `http://localhost:3000${this.$route.path}?limit=${this.limit}`;
            }
            console.log(this.getMoviesUrl);
            try {
                axios.get(this.getMoviesUrl)
                .then(res => {
                    this.movies = res.data.movies;
                    this.listTitle = res.data.listTitle;
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
