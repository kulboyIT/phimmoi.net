import Vue from 'vue';
import Router from 'vue-router';
import homePageContent from '../components/mainContent/homePageContent';
import moviesPageContent from '../components/mainContent/moviesPageContent';
import searchPageContent from '../components/mainContent/searchPageContent';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
           path: '/',
           component: homePageContent,
           name: 'HomePage'
        },
        {
            path: '/movie/search',
            component: searchPageContent,
            name: 'SearchPage'
        },
        {
            path: '/movie/:moviesType',
            component: moviesPageContent,
            name: 'moviesByTypePage'
        },
        {
            path: '/movie/:filterType/:typeId',
            component: moviesPageContent,
            name: 'moviesFilteredPage'
        }
    ]
})