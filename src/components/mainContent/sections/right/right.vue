<template>
    <div id="right-section">
        <right-box
            list_title="trailer phim mới"
            list_type="movies"
            list_url="/movie/new-movies?limit=8"></right-box>
        <right-box
            list_title="phim lẻ mới"
            list_type="movies"
            list_url="/movie/movies?limit=8"></right-box>
        <right-box
            list_title="phim bộ mới"
            list_type="movies"
            list_url="/movie/series?limit=8"></right-box>
    </div>
</template>

<script>
    import axios from 'axios';
    import rightBox from './rightBox/rightBox';

    export default {
        name: 'right-section',
        data () {
            return {
                
            }
        },
        methods: {
            
        },
        components: {
            'right-box': rightBox
        }
    }
</script>

<style>

</style>
