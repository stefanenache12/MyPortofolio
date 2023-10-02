import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AboutMePage from './pages/AboutMePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ContactMePage from './pages/ContactMePage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';



const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'hello',
            component: HomePage
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutMePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/contact-me',
            name: 'contact-me',
            component: ContactMePage
        },
        {
            path: '/:catchAll(.*)',
            name: '404-not-found',
            component: NotFoundPage
        },
   
    ]
});

export { router };