<template>
    <header id="header-section">
        <div class="custom-container">
            <div class="row">
                <div class="col-md-4 header-logo">
                    <a href="#" id="logo-btn" @click.prevent="$emit('changeUrl', '/')">
                        <img src="http://localhost:3000/images/logos/logo.png" alt="">
                    </a>
                </div>
                <div class="col-lg-8">
                    <div class="search-widget">
                        <form action="#" method="GET">
                            <input id="search-input" type="text" color="white" placeholder="Tìm: tên phim, đạo diễn, diễn viên" name="keyword">
                            <button id='search-btn' type="button"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import mainContent from '../mainContent/mainContent';

    export default {
        name: 'header-section',
        data () {
            return {
                searchKeyword: 'huynguyen'
            }
        },
        methods: {
            emitChangeUrl() {
                this.$emit('changeUrl', `/movie/search?keyword=${this.searchKeyword}`);
            }
        },
        mounted() {
            let vueObj = this;

            document.getElementById('search-input').addEventListener('input', function(e) {
                var old_element = document.getElementById('search-btn');
                var new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);

                document.getElementById('search-btn').addEventListener('click', function(e) {
                    vueObj.searchKeyword = document.getElementById('search-input').value;
                    e.preventDefault();
                    vueObj.$emit('changeUrl', `/movie/search?keyword=${vueObj.searchKeyword}`);
                    document.getElementById('search-btn').click();
                });

                document.getElementById('search-input').addEventListener('keypress', function(e) {
                    if (e.which === 13) {
                        e.preventDefault();
                        vueObj.searchKeyword = document.getElementById('search-input').value;
                        vueObj.$emit('changeUrl', `/movie/search?keyword=${vueObj.searchKeyword}`);
                    }
                });
            });
        }
    }
</script>

<style>

</style>
