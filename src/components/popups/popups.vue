<template>
     <div id="pop-ups">
        <login-register-popup></login-register-popup>
        <movie-detail-popup></movie-detail-popup>
    </div>
</template>

<script>
    import LoginRegisterPopup from './loginRegister/loginRegister';
    import MovieDetail from './movieDetail/movieDetail';

  export default {
    name: 'pop-ups',
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    components: {
        'login-register-popup': LoginRegisterPopup,
        'movie-detail-popup': MovieDetail
    }
  }
</script>

<style>

</style>
