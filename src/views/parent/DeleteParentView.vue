<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="deleteParent">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 class="text-center py-10 text-2xl text-white font-chivo">Supression du parent</h5>
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
                <input class="form-control  pl-2 rounded-sm" placeholder="Nom de la personne" v-model="parent.nom" disabled />
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Prénom de la personne" v-model="parent.prenom" disabled />
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
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Mail</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Mail de la personne" v-model="parent.mailParent" disabled  />
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span class="input-group-text">Nombre d'enfants</span>
                </div>
                <input class="form-control pl-2 rounded-sm" placeholder="Nombre d'enfants ?" v-model="parent.nbrEnfantsParent" disabled />
              </div>
              <br />
              <div class="my-2">
                <div class="my-2">
                  <span>Moyen de Paiement</span>
                </div>
                 <input class="form-control pl-2 rounded-sm" placeholder="Moyen Paiement?" v-model="parent.moyenP" disabled />
              </div>
              <br />
            </div>
          </div>
            <div class="flex justify-center my-10 text-white text-lg">
              <span class="input-group-text">Dans le cadre d'un don, nous devons svaoir quel moyen de paiement vous envisager d'utiliser ?</span>
            </div>
            <div class="flex justify-center gap-3">
              <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Nom Utilisateur</span>
                  </div>
                  <input class="form-control pl-2 rounded-sm" placeholder="Nom d'utilisateur" v-model="parent.login" disabled />
                </div>
                <br />
                <div class="my-2">
                  <div class="my-2">
                    <span class="input-group-text">Mot de passe</span>
                  </div>
                  <input class="form-control pl-2 rounded-sm" placeholder="Mot de passe" v-model="parent.password" disabled />
                </div>
            </div>
              <br />
            <div class="bg-red-600 text-black py-10 my-10  text-lg font-chivo font-bold mx-[20%]">
              <h5 class="alert alert-warning text-center" role="alert">  Attention vous allez supprimer ce parent, cette action est irreversible !!</h5>
            </div>
        </div>

        <div class="flex md:gap-10 gap-5  justify-center py-10 text-white">
          <button type="submit" class="bg-bleufonce md:px-8 px-4 py-4 hover:bg-blue-600">Supprimer</button>
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
      photoActuelle: null,
      imageData:null,
    };
  },
  mounted() {
    console.log("id parent", this.$route.params.id);
    this.getParent(this.$route.params.id);
  },
  methods: {
    async getParent(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "parent", id);
      this.refParent = await getDoc(docRef);
      if (this.refParent.exists()) {
        this.parent = this.refParent.data();
        this.photoActuelle = this.parent.photo;
      } else {
        this.console.log("parent inexistant");
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

    async deleteParent() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "parent", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "parent/", this.parent.photo);
      deleteObject(docRef);
      this.$router.push("/listeParent");
    },
  },
};
</script>

