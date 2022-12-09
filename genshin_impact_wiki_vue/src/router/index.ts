import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/characters',
            name: 'characters',
            component: () => import('../views/CharactersView.vue'),
        },
        {
            path: '/characters/:name',
            name: 'character name',
            component: () => import('../views/CharacterView.vue'),
        },
        {
            path: '/weapons',
            name: 'weapons',
            component: () => import('../views/WeaponView.vue'),
        },
        {
            path: '/artifacts',
            name: 'artifacts',
            component: () => import('../views/ArtifactView.vue'),
        },
    ],
})

export default router
