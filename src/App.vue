<template>
  <div id="app">
    <popup></popup>
    <header-section @changeUrl='changeUrl'></header-section>
    <navigation @changeUrl='changeUrl'></navigation>
    <main-content :url="url"></main-content>
    <footer-section></footer-section>
    <button title="Đăng nhập" class="login-btn">
        <img src="http://localhost:3000/images/icons/login-icon.png" alt="">
    </button>
  </div>
</template>

<script>
  import HeaderSection from './components/headerSection/headerSection';
  import FooterSection from './components/footerSection/footerSection';
  import Navigation from './components/navigations/Navigation';
  import Popups from './components/popups/popups';
  import mainContent from './components/mainContent/mainContent';

  export default {
    name: 'app',
    data () {
      return {
        url: '/'
      }
    },
    methods: {
      changeUrl(url) {
        this.url = url;
      }
    },
    components: {
      'header-section': HeaderSection,
      'navigation': Navigation,
      'footer-section': FooterSection,
      'popup': Popups,
      'main-content': mainContent
    },
    mounted () {
      $(document).ready(function () {
        $(this).scrollTop(0);
        dropdown();
        carousel();
        //auto spin carousel
        setInterval(function () {
            autoCarousel();
        }, 7000);
        getMovieDetails();
        popUpModals();
        popDownModals();
        showHideCommentButton();
        addNewComment();
        showHideLoginForm();
        loginRegisterchange();        
        logout();
      });
    }
  }
</script>

<style>

</style>
