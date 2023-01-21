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
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue")
    },
    {
        path: "/additem",
        name: "additem",
        component: () => import("@/views/AddItem.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import("@/views/NotFound.vue")

    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router