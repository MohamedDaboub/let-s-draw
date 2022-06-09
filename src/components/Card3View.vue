<template>
    <div class="flex bg-noir rounded-xl flex-col" v-for="dessin in listeDessin" :key="dessin.id">
            <img class="rounded-t-lg w-full h-full" :src="dessin.photo" :alt="dessin.titre">
            <div class="flex text-white mx-4">
                <h2 class="font-bold font-chivo text-2xl my-6">{{ dessin.titre }}</h2>
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
    props :{
        image: String,
        nom: String,
    },
    data() {
    return {
      listeDessin: [],
    };
  },
  mounted() {
    this.getDessin();
  },
  methods: {
    async getDessin() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données(collection)document participant
      const dbDessin = collection(firestore, "dessin");
      // Liste des participants triés sur leur nom
      const q = query(dbDessin, orderBy("titre", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeDessin = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque participant
        // parcours de la liste

        this.listeDessin.forEach(function (dessin) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "dessin/" + dessin.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              dessin.photo = url;
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