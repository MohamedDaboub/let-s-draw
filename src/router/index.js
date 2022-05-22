import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import TendancesView from '../views/TendancesView.vue'
import DonView from '../views/DonView.vue'
import GlossaireView from '../views/GlossaireView.vue'
import choixArtisteView from '../views/choixArtisteView.vue'
import profilArtisteView from '../views/profilArtisteView.vue'
import FormulaireView from '../views/FormulaireView.vue'
import ContactView from '../views/ContactView.vue'
import ProfilView from '../views/ProfilView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import AproposView from '../views/AproposView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Tendances', name: 'TendancesView', component: TendancesView },
    { path: '/Don', name: 'DonView', component: DonView },
    { path: '/Glossaire', name: 'GlossaireView', component: GlossaireView },
    { path: '/choixArtiste', name: 'choixArtisteView', component: choixArtisteView },
    { path: '/profilArtiste', name: 'profilArtisteView', component: profilArtisteView },
    { path: '/Formulaire', name: 'FormulaireView', component: FormulaireView },
    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/Profil', name: 'ProfilView', component: ProfilView },
    { path: '/Mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/Inscription', name: 'InscriptionView', component: InscriptionView },
    { path: '/Apropos', name: 'AproposView', component: AproposView },
    // ici les autres routes
  ]
})

export default router
