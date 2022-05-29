<template>
  <div class="container">
    <form enctype="multipart/form-data" @submit.prevent="updateParent">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Mise à jour compte parent</h5>
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
                  <span class="input-group-text">Téléphone</span>
                </div>
                <input class="form-control" placeholder="Téléphone de la personne" v-model="parent.telephoneParent" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Mail</span>
                </div>
                <input class="form-control" placeholder="Mail de la personne" v-model="parent.mailParent" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nombre d'enfants</span>
                </div>
                <select class="custom-select" v-model="parent.enfantsNbr">
                  <option selected disabled>Sélectionner un nombre</option>
                  <option v-for="enfantsNbr in listeEnfantsNbr" :key="enfantsNbr.nombre">{{ enfantsNbr.nombre }}</option>
                </select>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Modifier</button>
          <button class="btn btn-light float-right">
            <router-link to="/CreateParent">Annuler</router-link>
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
      listeEnfantsNbr: [],
      parent: {
        nom: null,
        prenom: null,
        photo: null,
        mailParent: null,
        telephoneParent: null,
        enfantsNbr: null,
      },
      refParent: null,
      imgModifiée: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id parent", this.$route.params.id);
    this.getParent(this.$route.params.id);
    this.getEnfantsNbr();
  },
  methods: {
    async getEnfantsNbr() {
      const firestore = getFirestore();
      const dbEnfantsNbr = collection(firestore, "enfantsNbr");
      const query = await getDocs(dbEnfantsNbr);
      query.forEach((doc) => {
        let enfantsNbr = {
          id: doc.id,
          nombre: doc.data().nombre,
        };
        this.listeStyle.push(enfantsNbr);
        console.log("nombre d'enfants ?", this.enfantsNbr);
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
      this.$router.push("/parent");
    },
  },
};
</script>