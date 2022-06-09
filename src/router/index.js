import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import DonView from '../views/DonView.vue'
import GlossaireView from '../views/GlossaireView.vue'
import choixArtisteView from '../views/choixArtisteView.vue'
import FormulaireView from '../views/FormulaireView.vue'
import ContactView from '../views/ContactView.vue'
import AfficheParentView from '../views/parent/AfficheParentView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import AproposView from '../views/AproposView.vue'
import UnicefView from '../views/UnicefView.vue'
import page404 from '../views/Page404View.vue'
import AuthFirebaseView from '../AuthentificationFirebase/AuthFirebaseView.vue'
import CreationArtisteView from '../views/artiste/CreationArtisteView.vue'
import ModifierArtisteView from '../views/artiste/ModifierArtisteView.vue'
import DeleteArtisteView from '../views/artiste/DeleteArtisteView.vue'
import AfficheArtisteView from '../views/artiste/AfficheArtisteView.vue'
import CreationParentView from '../views/parent/CreationParentView.vue'
import ListeParentView from '../views/parent/ListeParentView.vue'
import ModifierParentView from '../views/parent/ModiferParentView.vue'
import DeleteParentView from '../views/parent/DeleteParentView.vue'
import ConnexionParentView from '../views/parent/ConnexionParentView.vue'
import ListeDessinView from '../views/dessin/ListeDessinView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Don', name: 'Don', component: DonView },
    { path: '/Glossaire', name: 'Glossaire', component: GlossaireView },
    { path: '/choixArtiste', name: 'choixArtisteView', component: choixArtisteView },    
    { path: '/Formulaire', name: 'FormulaireView', component: FormulaireView },
    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/AfficheParent/:id', name: 'AfficheParent', component: AfficheParentView },
    { path: '/Mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/Inscription', name: 'InscriptionView', component: InscriptionView },
    { path: '/Apropos', name: 'AproposView', component: AproposView },
    { path: '/Unicef', name: 'UnicefView', component: UnicefView },
    { path: '/:pathMatch(.*)*', name: 'page404', component: page404 },
    { path: '/Auth', name:'AuthFirebase', component: AuthFirebaseView},
    { path: '/CreateArtiste', name:'CreateArtiste', component: CreationArtisteView},
    { path: '/ModifierArtiste/:id', name:'ModifierArtiste', component: ModifierArtisteView},
    { path: '/DeleteArtiste/:id', name:'DeleteArtiste', component: DeleteArtisteView},
    { path: '/AfficheArtiste/:id', name: 'AfficheArtiste', component: AfficheArtisteView },
    { path: '/CreateParent', name:'CreateParent', component: CreationParentView},
    { path: '/ListeParent', name:'ListeParent', component: ListeParentView},
    { path: '/ModifierParent/:id', name:'ModifierParent', component: ModifierParentView},
    { path: '/DeleteParent/:id', name:'DeleteParent', component: DeleteParentView},
    { path: '/ConnexionParent', name:'ConnexionParent', component: ConnexionParentView},
    { path: '/ListeDessin', name:'ListeDessin', component: ListeDessinView},
    // ici les autres routes
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return savedPosition || { top: 0 }
  },
})

export default router
