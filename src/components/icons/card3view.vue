<template>
<div class="mx-5 grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(345px,1fr))] gap-8 p-10 py-20">
    <div class="p-6 flex bg-bleufonce rounded-xl" v-for="parent in listeParent" :key="parent.id">
            <img class="rounded-full w-32 h-32" :src="parent.photo" :alt="parent.nom">
            <div class="flex flex-col text-white ml-4">
                <p class="font-bold text-2xl mt-6"> {{ parent.prenom }} {{ parent.nom }}</p>
                <p class="text-lg ml-4 mt-1">{{ parent.nbrEnfantsParent }}</p>
                <div class="flex gap-5 items-center">
                <RouterLink :to="{ name: 'AfficheParent', params: { id: parent.id } }"><p>Afficher</p></RouterLink>
                <RouterLink :to="{ name: 'ModifierParent', params: { id: parent.id } }"><edit class="fill-white"></edit></RouterLink>
                <RouterLink :to="{ name: 'DeleteParent', params: { id: parent.id } }"><trach class="fill-white"></trach></RouterLink>
                </div>
            </div>

    </div>
</div>
</template>
<script>
import edit from "../../components/icons/EditView.vue"
import trach from "../../components/icons/TrashView.vue"
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage,
  ref, 
  getDownloadURL,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
export default {


   name: "cardV2view",
   components: { edit, trach },
  data() {
    return {
      listeParent: [],
    };
  },
  mounted() {
    this.getParent();
  },
  methods: {
    async getParent() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données(collection)document participant
      const dbParent = collection(firestore, "parent");
      // Liste des participants triés sur leur nom
      const q = query(dbParent, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeParent = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque participant
        // parcours de la liste

        this.listeParent.forEach(function (parent) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "parent/" + parent.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              parent.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
    
  },
}
</script>