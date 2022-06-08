<template>
<div class="mx-5 grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(345px,1fr))] gap-8 p-10 py-20">
    <div class="p-6 flex bg-bleufonce rounded-xl" v-for="artiste in listeArtiste" :key="artiste.id">
            <img class="rounded-full w-32 h-32" :src="artiste.photo" :alt="artiste.description">
            <div class="flex flex-col text-white ml-4">
                <p class="font-bold text-2xl mt-6"> {{ artiste.prenom }} {{ artiste.nom }}</p>
                <p class="text-lg ml-4 mt-1">{{ artiste.role }}</p>
                <RouterLink :to="{ name: 'AfficheArtiste', params: { id: artiste.id } }"><p>Afficher</p></RouterLink>
                <RouterLink :to="{ name: 'ModifierArtiste', params: { id: artiste.id } }"><p>Modifier</p></RouterLink>
                <RouterLink :to="{ name: 'DeleteArtiste', params: { id: artiste.id } }"><p>Supprimer</p></RouterLink>
            </div>

    </div>
</div>
</template>
<script>
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
  data() {
    return {
      listeArtiste: [],
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données(collection)document participant
      const dbArtiste = collection(firestore, "artiste");
      // Liste des participants triés sur leur nom
      const q = query(dbArtiste, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque participant
        // parcours de la liste

        this.listeArtiste.forEach(function (artiste) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "artiste/" + artiste.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              artiste.photo = url;
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