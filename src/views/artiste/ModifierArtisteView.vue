<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="updateArtiste">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Mise à jour compte artiste</h5>
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
                <input class="form-control" placeholder="Nom de la personne" v-model="artiste.nom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input class="form-control" placeholder="Prénom de la personne" v-model="artiste.prenom" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Age</span>
                </div>
                <input class="form-control" placeholder="Age" v-model="artiste.age" required />
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
                <input class="form-control" placeholder="Mail de la personne" v-model="artiste.mailArtiste" required />
              </div>
              <!-- <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Date naissance</span>
                                </div>
                                <input 
                                    type="date"
                                    class="form-control"
                                    v-model="participant.naissance"
                                    format="dd//mm/yyyy" 
                                    required />                    
                            </div> -->
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Délai</span>
                </div>
                <input class="form-control" placeholder="Délai" v-model="artiste.délai" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">description</span>
                </div>
                <input class="form-control" placeholder="Délai" v-model="artiste.description" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Style</span>
                </div>
                <select class="custom-select" v-model="artiste.categorie">
                  <option selected disabled>Sélectionner un style</option>
                  <option v-for="categorieArtiste in listecategorieArtiste" :key="categorieArtiste.libellé">{{ categorieArtiste.libellé }}</option>
                </select>
              </div>
            <br />
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
      listecategorieArtiste: [],
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
      },
      refArtiste: null,
      imgModifiée: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
    this.getStyle();
  },
  methods: {
    async getCategorieA() {
      const firestore = getFirestore();
      const dbCateA = collection(firestore, "categorieArtiste");
      const query = await getDocs(dbCateA);
      query.forEach((doc) => {
        let categorieArtiste = {
          id: doc.id,
          libellé: doc.data().libellé,
        };
        this.categorieArtiste.push(categorieArtiste);
        console.log("liste des categories", this.categorieArtiste);
      });
    },

    previewImage: function (event) {
      // Miseàjour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.artiste.photo = this.file.name;
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
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.artiste = this.refArtiste.data();
        this.photoActuelle = this.artiste.photo;
      } else {
        this.console.log("Artiste inexistant");
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

    async updateArtiste() {
      if (this.imgModifiée) {
        const storage = getStorage();
        let docRef = ref(storage, "artiste/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artiste/" + this.artiste.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Upload a base64 string", this.artiste.photo);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
      this.$router.push("/choixArtiste");
    },
  },
};
</script>