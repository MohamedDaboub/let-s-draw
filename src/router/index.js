import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import TendancesView from '../views/TendancesView.vue'
import DonView from '../views/DonView.vue'
import GlossaireView from '../views/GlossaireView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Tendances', name: 'TendancesView', component: TendancesView },
    { path: '/Don', name: 'DonView', component: DonView },
    { path: '/Glossaire', name: 'GlossaireView', component: GlossaireView },
    // ici les autre routes
  ]
})

export default router
