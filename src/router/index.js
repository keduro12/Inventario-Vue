import {
    createRouter,
    createWebHistory
} from "vue-router"


const routes = [{
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/inventario",
        name: "inventario",
        component: () => import("@/views/InventarioView.vue")
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router