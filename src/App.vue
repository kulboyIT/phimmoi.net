<template>
  <div id="app">
    <popup  
      @changeAuthStatus="changeAuthStatus"
      @updateCurrentUser="updateCurrentUser"
      :is_authenticated="isAuthenticated"
      :user_id="userId"
      :user_first_name="userFirstName"
      :user_last_name="userLastName"
      :user_avatar="userAvatar"></popup>
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
  import jwtDecode from 'jwt-decode';

  export default {
    name: 'App',
    data () {
      return {
        url: '/',
        isAuthenticated: false,
        userFirstName: '',
        userLastName: '',
        userAvatar: '',
        userId: ''
      }
    },
    methods: {
      changeUrl(url) {
        this.url = url;
      },
      changeAuthStatus() {
        this.isAuthenticated = !this.isAuthenticated;
      },
      updateCurrentUser() {
        if(localStorage.getItem('usertoken') === null) {
          this.isAuthenticated = false;
        } else {
          let token = localStorage.usertoken;
          let decoded = jwtDecode(token);

          this.userFirstName = decoded.first_name;
          this.userLastName = decoded.last_name;
          this.userAvatar = decoded.avatar;
          this.userId =decoded.id;
          this.isAuthenticated = true;
        }
      },
      logout() {
        this.changeAuthStatus();
        localStorage.removeItem('usertoken');
        $.get('http://localhost:3000/logout', function(data) {
            alert('Đăng xuất thành công!!!');
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
    created() {
      if(localStorage.getItem('usertoken') === null) {
        this.isAuthenticated = false;
      } else {
        let token = localStorage.usertoken;
        let decoded = jwtDecode(token);

        this.userFirstName = decoded.first_name;
        this.userLastName = decoded.last_name;
        this.userAvatar = decoded.avatar;
        this.userId =decoded.id;
        this.isAuthenticated = true;
      }
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
    }
  }
</script>

<style>

</style>
