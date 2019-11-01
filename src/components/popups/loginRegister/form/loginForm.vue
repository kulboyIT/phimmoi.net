<template>
    <form action="http://localhost:3000/login" class="login-form" method="POST">
        <div class="input-field">
            <label for="username">Tên đăng nhập</label>
            <input type="text" name="username" class="username">
        </div>

        <div class="input-field">
            <label for="password">Mật khẩu</label>
            <input type="password" name="password" class="password">
        </div>

        <div class="btns">
            <input type="submit" value="Đăng nhập">
        </div>
        <a href="#" id="open-register">Tạo tài khoản mới.</a>
    </form>
</template>

<script>
  export default {
    name: 'login-form',
    data () {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
