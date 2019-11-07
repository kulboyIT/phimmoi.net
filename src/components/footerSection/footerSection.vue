<template>
    <footer>
    <div class="custom-container">
        <div class="row">
            <div class="col-lg-2"><img src="http://localhost:3000/images/logos/logo.png" alt="" class="logo"></div>
            <div class="col-lg-6 cate-list-group">
                <div class="row">
                    <div class="col-4">
                        <div class="cate-title">PHIM MỚI</div>
                        <div class="cate-list">
                            <ul>
                                <li class="cate-item"><a href="#">Phim lẻ mới</a></li>
                                <li class="cate-item"><a href="#">Phim bộ mới</a></li>
                                <li class="cate-item"><a href="#">Phim chiếu rạp</a></li>
                                <li class="cate-item"><a href="#">Phim kinh điển</a></li>
                                <li class="cate-item"><a href="#">Phim sắp chiếu</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="cate-title">PHIM MỚI</div>
                        <div class="cate-list">
                            <ul>
                                <li class="cate-item"><a href="#">Phim lẻ mới</a></li>
                                <li class="cate-item"><a href="#">Phim bộ mới</a></li>
                                <li class="cate-item"><a href="#">Phim chiếu rạp</a></li>
                                <li class="cate-item"><a href="#">Phim kinh điển</a></li>
                                <li class="cate-item"><a href="#">Phim sắp chiếu</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="cate-title">PHIM MỚI</div>
                        <div class="cate-list">
                            <ul>
                                <li class="cate-item"><a href="#">Phim lẻ mới</a></li>
                                <li class="cate-item"><a href="#">Phim bộ mới</a></li>
                                <li class="cate-item"><a href="#">Phim chiếu rạp</a></li>
                                <li class="cate-item"><a href="#">Phim kinh điển</a></li>
                                <li class="cate-item"><a href="#">Phim sắp chiếu</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 contacts">
                <p>Liên hệ quảng cáo</p>
                <p>Email: phimmoi.net@gmail.com</p>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
    export default {
        name: 'HeaderSection',
        data () {
            return {
            
            }
        },
        methods: {
            
        }
    }
</script>

<style>
    footer {
        background-color: #000000;
        color: #fff;
        width: 100%;
        padding: 10px 0;
    }

    footer .cate-title {
        color: #f7e148;
        font-size: 1.5rem;
    }

    footer .cate-list-group,
    footer .contacts,
    footer .logo  {
        margin-left: 10px;
    }

    footer .logo {
        width: 120px;
        height: auto;
        margin-bottom: 10px;
    }

    footer ul{
        list-style-type: none;
        padding-left: 0;
    }

    footer .cate-item a{
        color: #fff;
        font-size: 1.2rem;
    }
</style>
