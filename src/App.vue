<template>
  <div id="app">
    <popup @changeAuthStatus="changeAuthStatus"></popup>
    <header-section @changeUrl='changeUrl'></header-section>
    <navigation @changeUrl='changeUrl'></navigation>
    <main-content :url="url"></main-content>
    <footer-section></footer-section>
    <button v-if="!isAuthenticated" title="Đăng nhập" class="login-btn" @click.prevent="openLoginRegisterForm">
        <img src="http://localhost:3000/images/icons/login-icon.png" alt="">
    </button>
    <button v-else title="Đăng xuất" class="logout-btn" @click.prevent="logout">
        <img src="http://localhost:3000/images/icons/logout-icon.png" alt="">
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
    name: 'App',
    data () {
      return {
        url: '/',
        isAuthenticated: false
      }
    },
    methods: {
      changeUrl(url) {
        this.url = url;
      },
      changeAuthStatus() {
        this.isAuthenticated = !this.isAuthenticated;
      },
      logout() {
        this.changeAuthStatus();
        $.get('http://localhost:3000/logout', function(data) {
            console.log("da log out");
        });
      },
      openLoginRegisterForm() {
        $('.pop-up-login').show();
        $('.pop-up-login').find('.login-form').show();
        $('.pop-up-login').find('.register-form').hide();
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
        $(document).scrollTop(0); 
        getMovieDetails();
        popUpModals();
        popDownModals();
        showHideCommentButton();
        addNewComment();
        showHideLoginForm();
        loginRegisterchange();        
        logout();
        $.get('http://localhost:3000/get-log-in-status', function(res) {
          console.log(res);
        })
    }
  }
</script>

<style>

</style>
