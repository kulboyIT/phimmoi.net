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
  export default {
    name: 'login-form',
    data () {
      return {
        usernameInput: 'asdfasdf',
        passwordInput: 'nguchua'
      }
    },
    methods: {
      login() {
        let vueObj = this;
        $.post('http://localhost:3000/login', {
          username: this.usernameInput, 
          password: this.passwordInput 
        },
        function(res) {
          console.log(res);
          if(res.done) {
            vueObj.$emit('changeAuthStatus');
          }
        });
      }
    }
  }
</script>

<style>

</style>
