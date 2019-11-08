<template>
    <div id="main">
        <router-link :to="url" id="change-view"></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import router from '../../router';

    export default {
        name: 'main-content',
        props: ['url'],
        data () {
            return {
                
            }
        },
        router: router,
        methods: {

        },
        updated() {
            document.getElementById('change-view').click();
        }
    }
</script>

<style>

</style>
