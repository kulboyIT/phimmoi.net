<template>
  <div id="app">
    <popup></popup>
    <header-section></header-section>
    <navigation></navigation>
    <main-content></main-content>
    <footer-section></footer-section>
    <button v-if="loginStatus" title="Đăng xuất" class="logout-btn">
        <img src="/images/icons/logout-icon.png" alt="">
    </button>
    <button v-else title="Đăng nhập" class="login-btn">
        <img src="http://localhost:3000/images/icons/login-icon.png" alt="">
    </button>
  </div>
</template>

<script>
  import HeaderSection from './components/headerSection/headerSection';
  import FooterSection from './components/footerSection/footerSection';
  import Navigation from './components/navigations/Navigation';
  import MainContent from './components/mainContent/mainContent';
  import Popups from './components/popups/popups';

  export default {
    name: 'app',
    data () {
      return {
        loginStatus: false
      }
    },
    methods: {
      
    },
    components: {
      'header-section': HeaderSection,
      'navigation': Navigation,
      'main-content': MainContent,
      'footer-section': FooterSection,
      'popup': Popups
    },
    mounted () {
       try {
          axios.get(`http://localhost:3000/get-log-in-status`)
          .then(res => {
              this.loginStatus = res.data;
              console.log(res.data);
          });
      } catch (error) {
          console.log(error);
      }

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
