<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="updateParent">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 class="text-center py-10 text-2xl text-white font-chivo">Mise à jour compte parent</h5>
        </div>

        <div class="card-body">
          <div class="grid grid-cols-1">
            <div class="col-6">
              <div class="flex justify-center my-10">
                <img class="w-1/4 rounded-2xl" :src="imageData" />
              </div>
            </div>

            <div class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 md:mx-[15%] mx-[5%] text-base">
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Nom de la personne" v-model="parent.nom" required />
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Prénom de la personne" v-model="parent.prenom" required />
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  <label class="custom-file-label" for="file">Sélectionner l'image</label>
                </div>
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Mail</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Mail de la personne" v-model="parent.mailParent" required />
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Nombre d'enfants</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Nombre d'enfants ?" v-model="parent.nbrEnfantsParent" required />
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span>moyen de payement </span>
                </div>
                <select class="custom-select" v-model="parent.moyenP">
                  <option selected disabled>Sélectionner un moyen de paiement</option>
                  <option v-for="moyenDePaiement in listeMoyenP" :key="moyenDePaiement.libellé">{{ moyenDePaiement.libellé }}</option>
                </select>
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Nom Utilisateur</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Nom d'utilisateur" v-model="parent.login" required />
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Mot de passe</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Mot de passe" v-model="parent.password" required />
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="flex md:gap-10 gap-5  justify-center py-10 text-white">
          <button type="submit" class="bg-bleufonce md:px-8 px-4 py-4 hover:bg-blue-600">Modifier</button>
          <button class="bg-bleufonce md:px-8 px-4 py-4 hover:bg-blue-600">
            <router-link to="/listeParent">Annuler</router-link>
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
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage,
  ref, //
  getDownloadURL,
  uploadString,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateView",
  data() {
    return {
      imageData: null,
      listeMoyenP: [],
      parent: {
        nom: null,
        prenom: null,
        photo: null,
        mailParent: null,
        nbrEnfantsParent:null,
        moyenP:null,
        login:null,
        password:null,
      },
      refParent: null,
      imgModifiée: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id parent", this.$route.params.id);
    this.getParent(this.$route.params.id);
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
      // Reference du fichieràprévisualise
      //Verifie l'image est modifiée ou non
      this.imgModifiée = true;
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
    async getParent(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "parent", id);
      this.refParent = await getDoc(docRef);
      if (this.refParent.exists()) {
        this.parent = this.refParent.data();
        this.photoActuelle = this.parent.photo;
      } else {
        this.console.log("Parent inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "parent/" + this.parent.photo);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async updateParent() {
      if (this.imgModifiée) {
        const storage = getStorage();
        let docRef = ref(storage, "parent/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "parent/" + this.parent.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Upload a base64 string", this.parent.photo);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "parent", this.$route.params.id), this.parent);
      this.$router.push("/listeParent");
    },
  },
};
</script>