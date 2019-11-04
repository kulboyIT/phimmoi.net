<template>
    <div id="main">
        <router-view></router-view>
    </div>
</template>

<script>
    import router from '../../router';

    export default {
        name: 'main-content',
        data () {
            return {
                isHomePage: true
            }
        },
        router: router,
        methods: {
            
        },
    }
</script>

<style>

</style>
