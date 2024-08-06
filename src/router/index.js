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
        component: HomePage
    },
    {
        name: "AboutPage",
        path: "/about",
        component: AboutPage
    },
    {
        name: "ServicesPage",
        path: "/services",
        component: ServicesPage
    }
];

// Inicialización | Rutas de la app
const router = createRouter({
    history: createWebHistory(), routes
    // Configurar el historial del navegar para manejar la navegacion
});

export default router;