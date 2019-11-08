<template>
     <div class="pop-up-login">
        <div class="validate-box custom-container">
            <button class="close-modal-btn close-login-modal">&#10006;</button>
            <div class="section-title">
                Đăng ký
            </div>
            <register-form></register-form>
            <login-form @changeAuthStatus="changeAuthStatus"></login-form>
        </div>
        <div class="pop-up-bg"></div>
    </div>
</template>

<script>
    import LoginForm from './form/loginForm';
    import Register from './form/registerForm';

  export default {
    name: 'login-register',
    data () {
      return {

      }
    },
    methods: {
      changeAuthStatus() {
        this.$emit('changeAuthStatus');
      }
    },
    components: {
        'login-form': LoginForm,
        'register-form': Register
    },
    mounted() {
      showHideLoginForm();
      loginRegisterchange();
      hideNotifications();
      signUp();
    }
  }
</script>

<style>

</style>
