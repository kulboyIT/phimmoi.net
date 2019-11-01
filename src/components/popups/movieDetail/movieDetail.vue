<template>
    <div class="pop-up-window">
        <!-- MODAL CONTENT -->
        <div class="custom-container pop-up-content row">
            <div class="col-lg-8 nice-scroll">
                <movie-info-tabs></movie-info-tabs>
            </div>
            <div class="col-lg-4 nice-scroll">
                <comment-list></comment-list>
            </div>
        </div>

        <button class="close-modal-btn close-movie-details-modal">&#10006;</button>
        <div class="pop-up-bg"></div>
    </div>
</template>

<script>
    import CommentList from './commentList/commentList';
    import MovieInfoTabs from './movieInfoTabs/movieInfoTabs';

    export default {
        name: 'movie-detail-popup',
        data () {
            return {
                
            }
        },
        methods: {
        
        },
        components: {
            'comment-list': CommentList,
            'movie-info-tabs': MovieInfoTabs
        }
    }
</script>