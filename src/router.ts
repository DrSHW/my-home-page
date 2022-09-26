import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: () => import("./views/MainSite.vue"),
    },
    {
        path: "/links",
        name: "links",
        component: () => import("./views/Links.vue"),
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
