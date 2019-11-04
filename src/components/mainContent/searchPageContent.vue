<template>
    <div id="movies-
    page">
        <div class="custom-container">
            <div class="row">
                <div class="col-lg-8 clear">
                    <left is_home_page='false' is_search_page='true'></left>
                </div>
                <div class="col-lg-4 clear">
                    <right></right>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Carousel from './carousel/carousel';
    import Left from './sections/left/left';
    import Right from './sections/right/right';

    export default {
        name: 'movies-page',
        data () {
            return {

            }
        },
        methods: {
            
        },
        components: {
            'carousel': Carousel,
            'left': Left,
            'right': Right
        }
    }
</script>

<style>

</style>
