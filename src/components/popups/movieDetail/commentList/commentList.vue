<template>
    <div class="section comments">
        <div class="title-sm">
            Bình luận về phim
        </div>
        <div class="comment-form">
            <div v-show="is_authenticated" class="comment" id="comment-posible">
                <div class="avatar">
                    <img :src="userAvatar" alt="">
                </div>
                <div class="comment-details">
                    <div class="user-name">{{user_first_name}} {{user_last_name}}</div>
                    <div class="comment-content">
                        <form action="#" method="POST">
                            <textarea name="content" id="comment-content" cols="42" rows="7"></textarea>
                            <input type="text" id="movie-id" name="movieId">
                            <input type="text" id="user-id" name="userId" :value="user_id">
                            <div class="comment-btns">
                                <input class="up-btn" type="submit" value="Đăng">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div v-show="!is_authenticated" class="comment" id="comment-imposible">
                <span class="notif">Hãy <a href="#" class="open-login">đăng nhập</a> để comment.</span>
            </div>
        </div>
        <div class="comment-list nice-scroll" style="height: 65%">

        </div>
    </div>
</template>

<script>
  export default {
    name: 'comment-list',
    props: ['is_authenticated', 'user_id', 'user_first_name', 'user_last_name', 'user_avatar'],
    data () {
      return {
        
      }
    },
    computed: {
        userAvatar() {
            return `http://localhost:3000${this.user_avatar}`;
        }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
