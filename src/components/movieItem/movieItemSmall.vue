<template> 
    <a href="#" 
        class="movie-detail-link"
        :data-target="movie_id">
        <div class="movie-link movie-thumb-sm" :title="title_vn">
            <img class="figure" :src="'http://localhost:3000'+thumbnail" :alt="title_vn">
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
        name: 'movie-item-sm',
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
