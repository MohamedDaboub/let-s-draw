import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
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
import UnicefView from '../views/UnicefView.vue'
import page404 from '../views/Page404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
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
    { path: '/Unicef', name: 'UnicefView', component: UnicefView },
    { path: '/:pathMatch(.*)*', name: 'page404', component: page404 },
    // ici les autres routes
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return savedPosition || { top: 0 }
  },
})

export default router
