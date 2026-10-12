import {createRouter, CreateRouter, createWebHistory} from 'vue-router'
import PageNotFound from "../src/shared/presentation/views/page-not-found.vue";
import Home from "../src/section/presentation/views/home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: Home},
        {path: '/home', component: () => import("../src/section/presentation/views/home.vue")},
        {path: '/telemetry/items/new', component: () => import("../src/section/presentation/views/telemetry-item-new.vue")},
        {path: '/:pathMatch(.*)*', component: PageNotFound }
    ]
})

export default router;