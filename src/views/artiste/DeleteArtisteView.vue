<template>
  <div class="">
    <form enctype="multipart/form-data" @submit.prevent="deleteArtiste">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 class="text-center py-10 text-2xl text-white font-chivo">Supression de l"artiste</h5>
        </div>

        <div class="">
          <div class="grid grid-cols-1">
            <div class="">
              <div class="flex justify-center my-10">
                <img class="w-1/4 rounded-2xl" :src="imageData" />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="grid grid-cols-4 mx-[20%] text-base ">
                <div class="my-2">
                  <div class="my-2">
                    <span class="">Nom</span>
                  </div>
                  <input class="pl-2 rounded-sm" placeholder="Nom de la personne" v-model="artiste.nom" disabled />
                </div>
                <br />
                <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Prénom</span>
                  </div>
                  <input class="form-control pl-2 rounded-sm" placeholder="Prénom de la personne" v-model="artiste.prenom" disabled />
                </div>
                <br />
                <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Age</span>
                  </div>
                  <input class="form-control pl-2 rounded-sm" placeholder="Age" v-model="artiste.age" required disabled />
                </div>
                <br />
                <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Photo</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" disabled/>
                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                  </div>
                </div>
                <br />
                <!-- <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Date naissance</span>
                  </div>
                  <input type="date" class="form-control" v-model="artiste.naissance" format="dd//mm/yyyy" disabled />
                </div> -->
                <br />
                <br />
                <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Délai</span>
                  </div>
                  <input class="form-control pl-2 rounded-sm" placeholder="Délai" v-model="artiste.délai" disabled />
                </div>
                <br />
                <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Description</span>
                  </div>
                  <input class="form-control pl-2 rounded-sm" placeholder="Délai" v-model="artiste.description" disabled />
                </div>
                <br />
                <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Style</span>
                  </div>
                  <select class="custom-select" v-model="artiste.categorie">
                    <option selected disabled>Sélectionner un style</option>
                    <option v-for="categorieArtiste in listecategorieArtiste" :key="categorieArtiste.libellé" disabled>{{ categorieArtiste.libellé }}</option>
                  </select>
                </div>
              <br />
              <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Metier</span>
                  </div>
                  <select class="custom-select" v-model="artiste.role">
                    <option selected disabled>Sélectionner un metier</option>
                    <option v-for="metier in listeMetier" :key="metier.libellé">{{ metier.libellé }}</option>
                  </select>
                </div>
                <br />
              </div>
              </div>
              <div class="flex justify-center gap-4 mt-4">
                <div class="my-2">
                  <div class="my-2">
                    <span class="">Nom utilisateur</span>
                  </div>
                  <input class="pl-2 rounded-sm" placeholder="nom user" v-model="artiste.login" required disabled />
                </div>
                <br />
                <div class="my-2">
                  <div class="my-2">
                    <span class="">Mot de passe</span>
                  </div>
                  <input class="pl-2 rounded-sm" placeholder="mot de passe" v-model="artiste.password" required disabled />
                </div>
              </div>
              <br />
            <div class="bg-red-600 flex justify-center my-10 mx-[30%]">
            <h5 class=" text-xl text-center my-10" role="alert">
                  Attention vous allez supprimer cet artiste, cette action est irreversible !!</h5>
            </div>
          </div>

          <div class="flex md:gap-10 gap-5  justify-center py-10 text-white">
            <button type="submit" class="bg-bleufonce md:px-8 px-4 py-4 hover:bg-blue-600">Supprimer</button>
            <button class="bg-bleufonce md:px-8 px-4 py-4 hover:bg-blue-600">
              <router-link to="/choixArtiste">Annuler</router-link>
            </button>
          </div>
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
  getDoc,
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
  ref, //
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      imageData:null,
      artiste: {
        nom: null,
        prenom: null,
        age:null,
        photo: null,
        mailArtiste: null,
        délai: null,
        categorie: null,
        style:null,
        description:null,
        role:null,
        login:null,
        password:null,
      },
      refArtiste: null,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.artiste = this.refArtiste.data();
        this.photoActuelle = this.artiste.photo;
      } else {
        this.console.log("artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
    previewImage: function (event) {
      // Miseàjour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.artiste.photo = this.file.name;
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
    async deleteArtiste() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "artiste/", this.artiste.photo);
      deleteObject(docRef);
      this.$router.push("/choixArtiste");
    },
  },
};
</script>


