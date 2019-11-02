import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '../components/mainContent/homePage';
import Moviepage from '../components//mainContent/moviePage';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
       {
           path: '/',
           component: Homepage,
           name: 'Home'
       },
       {
            path: '/movie/:type',
            component: Moviepage,
            name: 'MoviesByType'
        },
        {
            path: '/movie/category/:categoryId',
            component: Moviepage,
            name: 'MoviesByCatagoryId'
        }
    ]
})