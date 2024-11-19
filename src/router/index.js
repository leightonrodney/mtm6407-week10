import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import PortfolioItem from '../views/PortfolioItem.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/portfolio/:id',
            name: 'portfolioItem',
            component: PortfolioItem
        }
    ]
});

export default router;