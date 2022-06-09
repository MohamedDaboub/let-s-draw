<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="deleteParent">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Supression du parent</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div>
                <img class="preview img-fluid" :src="imageData" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input class="form-control" placeholder="Nom de la personne" v-model="parent.nom" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control" placeholder="Prénom de la personne" v-model="parent.prenom" disabled />
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
              <br />              
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Mail</span>
                </div>
                <input class="form-control" placeholder="Mail de la personne" v-model="parent.mailParent" disabled  />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nombre d'enfants</span>
                </div>
                <input class="form-control" placeholder="Nombre d'enfants ?" v-model="parent.nbrEnfantsParent" disabled />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Dans le cadre d'un don, nous devons svaoir quel moyen de paiement vous envisager d'utiliser ?</span>
                </div>
                 <input class="form-control" placeholder="Moyen Paiement?" v-model="parent.moyenP" disabled />
              </div>
              <br />
              <h5 class="alert alert-warning text-center" role="alert">
                Attention vous allez supprimer ce parent, cette action est irreversible !!
              </h5>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Supprimer</button>
          <button class="btn btn-light float-right">
            <router-link to="/CreateArtiste">Annuler</router-link>
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

