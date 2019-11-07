<template>
  <div id="pop-ups">
    <login-register-popup v-show="!isAuthenticated" @changeAuthStatus="changeAuthStatus"></login-register-popup>
    <movie-detail-popup></movie-detail-popup>
  </div>
</template>

<script>
import LoginRegisterPopup from "./loginRegister/loginRegister";
import MovieDetail from "./movieDetail/movieDetail";

export default {
  name: "pop-ups",
  props: ['is_authenticated'],
  data() {
    return {
      isAuthenticated: this.is_authenticated
    };
  },
  methods: {
    changeAuthStatus() {
      this.isAuthenticated = !this.isAuthenticated;
      this.$emit('changeAuthStatus');
    }
  },
  components: {
    "login-register-popup": LoginRegisterPopup,
    "movie-detail-popup": MovieDetail
  }
};
</script>

<style>
.pop-up-window {
  width: 100vw;
  height: 100vh;
  background-color: #00000075;
  z-index: 1000;
  position: fixed;
  display: none;
}

.pop-up-login {
  width: 100vw;
  height: 100vh;
  background-color: #00000075;
  z-index: 2000;
  position: fixed;
  display: none;
}

.pop-up-login .validate-box {
  width: 400px;
  height: auto;
  background-color: #2c2c2c;
  margin-top: 15px;
  padding: 15px 20px;
  z-index: 2000;
  position: relative;
  display: block;
  float: right;
}

.pop-up-login .validate-box .close-modal-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10000;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #ffffff7d;
}

.pop-up-login .validate-box .register-form,
.pop-up-login .validate-box .login-form {
  padding: 10px;
  margin: 20px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  display: none;
}

.pop-up-login .validate-box .register-form a,
.pop-up-login .validate-box .login-form a {
  margin: auto;
}

/* .pop-up-login .validate-box .login-form {
    display: none;
} */

.pop-up-login .validate-box .register-form .btns,
.pop-up-login .validate-box .login-form .btns {
  text-align: center;
  padding: 20px;
}

.pop-up-login .validate-box .register-form .btns input,
.pop-up-login .validate-box .login-form .btns input {
  width: 90px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #9b0000;
  border: none;
}

.pop-up-login .validate-box .section-title {
  text-align: center;
}

.pop-up-login .validate-box .input-field {
  display: block;
}

.pop-up-login .validate-box .input-field label {
  width: 150px;
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
}

.pop-up-login .validate-box .input-field input {
  width: 200px;
  font-size: 1.2rem;
  color: #000000;
}

.pop-up-content .movie-details {
  overflow: auto;
  height: 100%;
}

.pop-up-content .comments {
  height: 100%;
}

.pop-up-content .comments .comment-list .comment {
  margin: 10px 0px;
  padding: 10px 5px;
  background-color: #15151561;
  height: auto;
  width: auto;
  position: relative;
}

.pop-up-content .comments .comment-list .comment .avatar {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-bottom: 50px;
  position: absolute;
  margin: 10px;
}

.pop-up-content .comments .comment-list .comment .avatar img {
  width: 100%;
  height: auto;
}

.pop-up-content .comments .comment-list .comment .comment-details {
  display: inline-block;
  width: 80%;
  color: #fff;
  margin-top: 10px;
  margin-left: 20%;
}

.pop-up-content .comments .comment-list .comment .comment-details .user-name {
  font-size: 1.4rem;
  font-weight: bold;
}

.pop-up-content
  .comments
  .comment-list
  .comment
  .comment-details
  .comment-content {
  font-size: 1.3rem;
}

/* comment form start */
.pop-up-content .comments .comment-form .comment {
  margin: 10px 0px;
  padding: 10px 5px;
  background-color: #15151561;
  height: auto;
  width: 100%;
  position: relative;
}

.pop-up-content .comments .comment-form .comment .avatar {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-bottom: 50px;
  position: absolute;
  margin: 10px;
}

.pop-up-content .comments .comment-form .comment .avatar img {
  width: 100%;
  height: auto;
}

.pop-up-content .comments .comment-form .comment .comment-details {
  display: inline-block;
  width: 80%;
  color: #fff;
  margin-top: 10px;
  margin-left: 20%;
}

.pop-up-content .comments .comment-form .comment .comment-details .user-name {
  font-size: 1.4rem;
  font-weight: bold;
}

.pop-up-content
  .comments
  .comment-form
  .comment
  .comment-details
  .comment-content {
  font-size: 1.3rem;
}

.pop-up-content
  .comments
  .comment-form
  .comment
  .comment-details
  .comment-content
  .comment-btns {
  text-align: right;
  padding: 0px 5px;
  display: none;
}

.pop-up-content
  .comments
  .comment-form
  .comment
  .comment-details
  .comment-content
  .comment-btns
  .up-btn {
  background-color: #4267b2;
  color: #fff;
  border: 1px solid #4267b2;
  border-radius: 3px;
  padding: 3px 15px;
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
