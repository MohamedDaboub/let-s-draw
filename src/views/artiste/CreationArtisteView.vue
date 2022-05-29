<template>
<div class="container">
        <form enctype="multipart/form-data"
        @submit.prevent="createArtiste" >
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Création compte artiste</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne" v-model="artiste.nom"
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Prénom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Prénom de la personne"
                                    v-model="artiste.prenom" required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Photo</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage"
                                    >
                                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >mail</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Mail de la personne"
                                    v-model="artiste.mailArtiste" required />                    
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
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Téléphone</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Téléphone de la personne"
                                    v-model="artiste.telephoneArtiste" required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Style</span>
                                </div>
                                <select class="custom-select " v-model="artiste.style" >
                                    <option  selected disabled>Sélectionner un style</option>
                                    <option v-for="style in listeStyle" :key="style.libelle">{{style.libelle}}</option>
                                </select>
                            </div>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="card-footer">   
                    <button type="submit" class="float-left btn btn-light">
                        Créer
                    </button>
                    <button class="float-right btn btn-light" >
                        <router-link to="/CreateArtiste" >Annuler</router-link>
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
      listeStyle: [],
      artiste: {
        nom: null,
        prenom: null,
        photo: null,
        mailArtiste: null,
        telephoneArtiste: null,
        style: null,
      },
    };
  },
  mounted() {
    this.getStyle();
  },
  methods: {
    async getStyle() {
      const firestore = getFirestore();
      const dbStyle = collection(firestore, "style");
      const query = await getDocs(dbStyle);
      query.forEach((doc) => {
        let style = {
          id: doc.id,
          libelle: doc.data().libelle,
        };
        this.listeStyle.push(style);
        console.log("liste des style", this.style);
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
    async createArtiste() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'imageàuploader
      const refStorage = ref(storage, "artiste/" + this.artiste.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploadedabase64 string");
        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artiste"), this.artiste);
      });
      // redirection sur la liste des participants
      this.$router.push("/CreateArtiste");
    },
  },
};
</script>