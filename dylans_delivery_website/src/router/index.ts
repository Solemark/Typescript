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
            path: '/vehicle_details',
            name: 'vehicle_details',
            component: () => import('../views/VehicleDetailsView.vue'),
        },
        {
            path: '/contact_us',
            name: 'contact_us',
            component: () => import('../views/ContactUsView.vue'),
        },
    ],
})

export default router
