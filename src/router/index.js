import { createRouter, createWebHistory } from "vue-router"; // Vue Router

// Imports de Componentes
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ServicesPage from "@/views/ServicesPage.vue";

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
        name: "ServicesPage",
        path: "/services",
        component: ServicesPage,
        meta: { title: 'Services' }
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