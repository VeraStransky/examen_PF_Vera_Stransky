import { createWebHistory, createRouter } from "vue-router";
import Cálculodecalificaciones from "@/views/Cálculodecalificaciones.vue";
import FormulariodeRegistro from "@/views/FormulariodeRegistro.vue";


const routes = [
  {
    path: "/",
    name: "Cálculodecalificaciones",
    component: Cálculodecalificaciones
  },
      
  {
    path: "/FormulariodeRegistro",
    name: "FormulariodeRegistro",
    component: FormulariodeRegistro
    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  
});

export default router;