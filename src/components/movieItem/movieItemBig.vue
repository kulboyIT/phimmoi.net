<template> 
    <a href="#" 
        class="movie-detail-link"
        :data-target="movie_id">
        <div class="movie-link movie-thumb-big" :title="title_vn">
            <img class="thumb-bg" :src="'http://localhost:3000'+thumbnail" :alt="title_vn">
            <div class="movie-info">
                <div class="movie-title-vn">{{title_vn}}</div>
                <div class="movie-title-en">{{title_en}}</div>
            </div>
            <div class="time">{{time}} phút</div>
        </div>
    </a>
</template>

<script>
    export default {
        name: 'movie-item-big',
        props: ['title_vn', 'title_en', 'thumbnail', 'time', 'movie_id'],
        data () {
            return {
               
            }
        },
        methods: {
            
        }
    }
</script>

<style>

</style>
