<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="createParent">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 class="text-center py-10 text-2xl text-white font-chivo">Création compte Parent</h5>
        </div>

        <div class="card-body">
          <div class="grid grid-cols-1">
            <div class="">
              <div class="flex justify-center my-10">
                <img class="w-1/4 rounded-2xl" :src="imageData" />
              </div>
            </div>

            <div class="grid grid-cols-6 mx-[15%] text-base">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom de la personne" v-model="parent.nom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control" placeholder="Prénom de la personne" v-model="parent.prenom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">mail</span>
                </div>
                <input class="form-control" placeholder="Mail de la personne" v-model="parent.mailParent" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nombre d'enfants</span>
                </div>
                <input class="form-control" placeholder="Nombre d'enfants ?" v-model="parent.nbrEnfantsParent" required />
              </div>
              <br />
              <div class="input-group">
                <div class="py-3">
                  <span>Moyen Paiement</span>
                </div>
                <select class="custom-select" v-model="parent.moyenP">
                  <option selected disabled>Sélectionner un moyen de paiement</option>
                  <option v-for="moyenDePaiement in listeMoyenP" :key="moyenDePaiement.libellé">{{ moyenDePaiement.libellé }}</option>
                </select>
              </div>
              <br />
            </div>
          </div>
        <div class="text-xl text-white text-center py-10">
          <span class="input-group-text">Dans le cadre d'un don, nous devons svaoir quel moyen de paiement vous envisager d'utiliser ?</span>
        </div>
        </div>

        <div class="flex md:gap-10 gap-5  justify-center py-10 text-white">
          <button type="submit" class="bg-bleufonce md:px-8 px-4 py-4">Créer</button>
          <button class="bg-bleufonce md:px-8 px-4 py-4">
            <routerlink to="/listeParent">Annuler</routerlink>
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
      listeMoyenP: [],
      parent: {
        nom: null,
        prenom: null,
        photo: null,
        mailParent: null,
        nbrEnfantsParent: null,
        moyenP: null,
      },
    };
  },
  mounted() {
    this.getMoyenP();
  },
  methods: {
    async getMoyenP() {
      const firestore = getFirestore();
      const dbMoyenP = collection(firestore, "moyenDePaiement");
      const query = await getDocs(dbMoyenP);
      query.forEach((doc) => {
        let moyenDePaiement = {
          id: doc.id,
          libellé: doc.data().libellé,
        };
        this.listeMoyenP.push(moyenDePaiement);
        console.log("moyen de paiement ?", this.listeMoyenP);
      });
    },

    previewImage: function (event) {
      // Miseàjour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.parent.photo = this.file.name;
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
    async createParent() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'imageàuploader
      const refStorage = ref(storage, "parent/" + this.parent.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploadedabase64 string");
        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "parent"), this.parent);
      });
      // redirection sur la liste des participants
      this.$router.push("/listeParent");
    },
  },
};
</script>