import {
    createRouter,
    createWebHistory
} from "vue-router"
import {useUserStore} from "@/store/user.js"


const requireAuth = async(to, from, next) =>{
    const useUser = useUserStore();
    const user = await useUser.currentUser();

    if(user){
        next();
    }else{
        next("/login")
    }
    


}

const routes = [{
        path: "/",
        name: "home",
        beforeEnter: requireAuth,
        component: () => import("@/views/Home.vue"),
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: "/inventario",
        name: "inventario",
        beforeEnter: requireAuth,
        component: () => import("@/views/InventarioView.vue"),
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
        // beforeEnter: (to, from, next) =>{
        //     if(useUserStore.){
        //         next("/");
        //     }else{
        //         next();
        //     }
        // }
    },
    {
        path: "/additem",
        name: "additem",
        beforeEnter: requireAuth,
        component: () => import("@/views/AddItem.vue")
        
    },
    {
        path: "/profile",
        name: "profile",
        beforeEnter: requireAuth,
        component: () => import("@/views/profile.vue")
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("@/views/SingUp.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        beforeEnter: requireAuth,
        component: () => import("@/views/NotFound.vue")

    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// router.beforeEach((to, from, next) =>{
//     let useUser = useUserStore()
//     let currentUser_2 = useUser.currentUser();

//     console.log(currentUser_2 + " impreso")

//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (currentUser_2) {
//             next();
//         }else{
//             next('/login');
//         }

//         if (!currentUser_2) {
//             next('/login');
//         }
//     }else{
//         next();
//     }
// })


export default router