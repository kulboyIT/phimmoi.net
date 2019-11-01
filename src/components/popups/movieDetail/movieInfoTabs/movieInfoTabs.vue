<template>
     <div id="movie-info-tabs">
        <div class="section movie-details movie-summary nice-scroll">
            <div class="details">
                <div class="thumb">
                    <img src="" alt="" class="thumb-bg">
                    <div class="btns">
                        <a href="watching-page.html" class="btn btn-success download-btn">Download</a>
                        <a href="watching-page.html" class="btn btn-info trailer-btn">Trailer</a>
                        <a href="watching-page.html" class="btn btn-danger watch-btn">Xem phim</a>
                    </div>
                </div>
                <div class="movie-info">
                    <div class="movie-title">
                        <div class="movie-title-vn"></div>
                        <div class="movie-title-en"></div>
                    </div>
                    <div class="movie-dl-list nice-scroll">

                    </div>
                    <div class="movie-rating">
                        <p class="dl-title-bg">Đánh giá phim</p>
                        <p class="star-rating">

                        </p>
                    </div>
                </div>
            </div>
            <div class="section-sm">
                <div class="title-sm">
                    Nội dung phim
                </div>
                <p class="summary-content">
                </p>
            </div>
            <div class="section-sm">
                <div class="title-sm">
                    Từ khóa:
                    <ul class="tag-box">

                    </ul>
                </div>
            </div>
        </div>
        <div class="section player-window movie-details nice-scroll">
            <div class="details-sm">
                <div class="thumb-sm">
                    <img src="" alt="" class="thumb-bg">
                    <div class="btns">
                        <a href="watching-page.html" class="btn btn-info trailer-btn">Xem Trailer</a>
                        <a href="watching-page.html" class="btn btn-danger watch-btn">Xem Phim</a>
                    </div>
                </div>
                <div class="movie-info-sm">
                    <div class="title-sm">
                        Nội dung phim
                    </div>
                    <p class="summary-content">
                    </p>
                    <div class="btns">
                        <a href="watching-page.html" class="btn summary-btn">Xem Thêm...</a>
                    </div>
                </div>
            </div>
            <div class="section watching-window">
                <div class="title-sm">
                    Xem phim
                </div>
                <video class='watching-window' controls>
                    <source src="http://localhost:3000/movies/movie.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
        <div class="section movie-details nice-scroll movie-download">
            <div class="details-sm">
                <div class="thumb-sm">
                    <img src="" alt="" class="thumb-bg">
                    <div class="btns">
                        <a href="watching-page.html" class="btn btn-danger watch-btn">Xem Phim</a>
                    </div>
                </div>
                <div class="movie-info-sm">
                    <div class="title-sm">
                        Nội dung phim
                    </div>
                    <div class="summary-content">
                        <div class="btns">
                            <a href="watching-page.html" class="btn summary-btn">Xem Thêm...</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section watching-window">
                <div class="title-sm">
                    Link Download
                </div>
                <ul>
                    <li><a class="download-link-item" href="#">SD 480p</a></li>
                    <li><a class="download-link-item" href="#">HD 720p</a></li>
                    <li><a class="download-link-item" href="#">Full HD 1080p</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'movie-info-tabs',
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    components: {
    }
  }
</script>

<style>

</style>
