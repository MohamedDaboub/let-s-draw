<template>
  <h1 class="p-10 text-center text-3xl text-white">Mon Dessin</h1>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="createDessin">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 class="py-10 text-center font-chivo text-2xl text-white">Affichage du dessin</h5>
        </div>

        <div class="card-body">
          <div class="grid grid-cols-1">
            <div class="">
              <div class="my-10 flex justify-center">
                <img class="w-1/4 rounded-2xl" :src="imageData" />
              </div>
            </div>

            <div class="mx-[15%] grid grid-cols-6 text-base">
              <div class="">
                <div class="">
                  <span class="input-group-text">Titre dessi,</span>
                </div>
                <input class="form-control" placeholder="Titre du dessin" v-model="dessin.titre" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Description dessin</span>
                </div>
                <input class="form-control" placeholder="Titre du dessin" v-model="dessin.description" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" disabled/>
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div>
              <div class="input-group">
                <div>
                  <span>Auteur du dessin</span>
                </div>
                <select class="custom-select" v-model="dessin.auteur">
                  <option selected disabled>Sélectionner un moyen de paiement</option>
                  <option v-for="artiste in listeArtisteD" :key="artiste.nomComplet">{{ artiste.nomComplet }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-5 py-10 text-white md:gap-10">
          <button type="submit" class="bg-bleufonce px-4 py-4 md:px-8">Créer</button>
          <button class="py-4t bg-bleufonce px-4 md:px-8">
            <router-link to="/listeDessin">Annuler</router-link>
          </button>
        </div>
      </div>
    </form>
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
import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateArtisteView",
  data() {
    return {
      imageData: null,
      listeArtisteD: [],
      dessin: {
        titre: null,
        description: null,
        photo: null,
        auteur: null,
      },
    };
  },
  mounted() {
    this.getArtisteD();
  },
  methods: {
    async getArtisteD() {
      const firestore = getFirestore();
      const dbDessinA = collection(firestore, "artiste");
      const query = await getDocs(dbDessinA);
      query.forEach((doc) => {
        let artiste = {
          id: doc.id,
          nomComplet: doc.data().nomComplet,
        };
        this.listeArtisteD.push(artiste);
        console.log("auteur ?", this.listeArtisteD);
      });
    },

    previewImage: function (event) {
      // Miseàjour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.dessin.photo = this.file.name;
      // Reference to the DOM input element
      // Reference du fichieràprévisualiser
      var input = event.target;
      // On s'assure que l'onaau moins un fichieràlire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichieraété chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettreàjour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL(format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
    async createDessin() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'imageàuploader
      const refStorage = ref(storage, "dessin/" + this.dessin.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploadedabase64 string");
        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "dessin"), this.dessin);
      });
      // redirection sur la liste des participants
      this.$router.push("/listeDessin");
    },
  },
};
</script>