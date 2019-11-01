<template>
    <div class="movie-update">
        <update-btn-list></update-btn-list>
        <movies-tab></movies-tab>
    </div>
</template>

<script>
    import updateBtnList from './updateBtnList';
    import moviesTab from './moviesTab';

    export default {
        name: 'movie-update',
        data () {
            return {
         
            }
        },
        methods: {
            
        },
        components: {
            'update-btn-list': updateBtnList,
            'movies-tab': moviesTab
        }
    }
</script>

<style>

</style>
