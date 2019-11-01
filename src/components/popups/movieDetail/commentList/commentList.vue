<template>
    <div class="section comments">
        <div class="title-sm">
            Bình luận về phim
        </div>
        <div class="comment-form">
            <div class="comment" id="comment-posible">
                <div class="avatar">
                    <img src="http://localhost:3000/images/user-avatar/avatar1.png" alt="">
                </div>
                <div class="comment-details">
                    <div class="user-name">Huy Nguyen</div>
                    <div class="comment-content">
                        <form action="/comment/add-new" method="POST">
                            <textarea name="content" id="comment-content" cols="42" rows="7"></textarea>
                            <input type="text" id="movie-id" name="movieId">
                            <div class="comment-btns">
                                <input class="up-btn" type="submit" value="Đăng">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- <div class="comment" id="comment-imposible" style="display: none;">
                <span class="notif">Hãy <a href="#" class="open-login">đăng nhập</a> để comment.</span>
            </div> -->
        </div>
        <div class="comment-list nice-scroll" style="height: 65%">

        </div>
    </div>
</template>

<script>
  export default {
    name: 'comment-list',
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
