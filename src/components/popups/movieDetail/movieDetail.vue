<template>
    <div class="pop-up-window">
        <!-- MODAL CONTENT -->
        <div class="custom-container pop-up-content row">
            <div class="col-lg-8 nice-scroll">
                <movie-info-tabs></movie-info-tabs>
            </div>
            <div class="col-lg-4 nice-scroll">
                <comment-list
                    :is_authenticated="is_authenticated"
                    :user_id="user_id"
                    :user_first_name="user_first_name"
                    :user_last_name="user_last_name"
                    :user_avatar="user_avatar"></comment-list>
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
        props: ['is_authenticated','user_id', 'user_first_name', 'user_last_name', 'user_avatar'],
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