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
                        <movie-item-md
                            :movie_id="movie._id"
                            :thumbnail="movie.thumbnail"
                            :time="movie.time"
                            :title_vn="movie.title_vn"
                            :title_en="movie.title_en"></movie-item-md>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import movieItemMedium from '../../../../movieItem/movieItemMedium';

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
        components: {
            'movie-item-md': movieItemMedium
        },
        mounted() {
            if (this.isHomePage === 'true') {
                this.getMoviesUrl = `http://localhost:3000/movie/category/${this.categoryId}?limit=${this.limit}`;
            } else if(this.isSearchPage === 'true') {
                this.getMoviesUrl = `http://localhost:3000${this.$route.path}?keyword=${this.$route.query.keyword}&limit=${this.limit}`;
            } else {
                this.getMoviesUrl = `http://localhost:3000${this.$route.path}?limit=${this.limit}`;
            }
            
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
        },
        updated() {
            if (this.isHomePage === 'true') {
                this.getMoviesUrl = `http://localhost:3000/movie/category/${this.categoryId}?limit=${this.limit}`;
            } else if(this.isSearchPage === 'true') {
                this.getMoviesUrl = `http://localhost:3000${this.$route.path}?keyword=${this.$route.query.keyword}&limit=${this.limit}`;
            } else {
                this.getMoviesUrl = `http://localhost:3000${this.$route.path}?limit=${this.limit}`;
            }
            
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
