import { createRouter, createWebHistory } from "vue-router"; // Vue Router

// Imports de Componentes
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import ApiPage from "@/views/ApiPage.vue";

// Constantes para guardar un array de objetos
const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage,
        meta: { title: 'Home' }
    },
    {
        name: "AboutPage",
        path: "/about",
        component: AboutPage,
        meta: { title: 'About' }
    },
    {
        name: "ContactPage",
        path: "/contact",
        component: ContactPage,
        meta: { title: 'Contact' }
    },
    {
        name: "ApiPage",
        path: "/api",
        component: ApiPage,
        meta: { title: 'Api' }
    }
];

// Inicialización | Rutas de la app
const router = createRouter({
    history: createWebHistory(), routes
    // Configurar el historial del navegar para manejar la navegacion
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;