<template>
    <form action="#" class="login-form" method="POST">
        <div class="input-field">
            <label for="username">Tên đăng nhập</label>
            <input type="text" name="username" class="username" v-model="usernameInput">
        </div>

        <div class="input-field">
            <label for="password">Mật khẩu</label>
            <input type="password" name="password" class="password" v-model="passwordInput">
        </div>

        <div class="btns">
            <input type="submit" @click.prevent="login"  value="Đăng nhập">
        </div>
        <a href="#" id="open-register">Tạo tài khoản mới.</a>
    </form>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'login-form',
    data () {
      return {
        usernameInput: '',
        passwordInput: ''
      }
    },
    methods: {
      login() {
        let self = this;
        let isAuthenticated = false;
        if (localStorage.getItem('usertoken') === null) {
          isAuthenticated = false;
        } else isAuthenticated = true;
        $.post('http://localhost:3000/login', {
          username: this.usernameInput,
          password: this.passwordInput,
          isAuthenticated: isAuthenticated
        },
        function(res) {
          if(res.success) {
            localStorage.setItem('usertoken', res.data);
            self.$parent.$parent.$emit('changeAuthStatus');
            self.$parent.$parent.$emit('updateCurrentUser');
          }
          alert(res.message);
        });
      }
    }
  }
</script>

<style>

</style>
