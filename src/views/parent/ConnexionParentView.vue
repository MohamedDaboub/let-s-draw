<template>
  <form @submit.prevent="onCnx">
    <div class="flex justify-center gap-10 py-10">
      <div class="row">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="text-white text-lg">Email</span>
          </div>
          <input
            class="form-control"
            placeholder="adresse mail"
            type="email"
            v-model="user.email"
            required
          />
        </div>
        <div class="input-group my-5">
          <div class="input-group-prepend">
            <span class="text-white text-lg">Mot de passe</span>
          </div>
          <input
            class="form-control"
            placeholder="mot de passe"
            :type="type"
            v-model="user.password"
            required
          />
          <div class="input-group-after">
            <button class="btn btn-light" @click.prevent="affiche()">
              <i class="fa fa-eye fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center text-white text-xl">
    <div class="alert alert-warning" role="alert">{{ message }}</div>
    </div>
    <div class="flex justify-center md:gap-10 gap-4 text-white py-10 ">
      <button type="submit" class="bg-bleufonce md:px-8 px-4 py-4">Connexion</button>
      <button type="button" class="bg-bleufonce md:px-8 px-4 py-4" @click="onDncx">
        Déconnexion
      </button>
    </div>
  </form>
  <p class="text-lg text-white text-center py-10">Pas encore inscrit ? <RouterLink class="text-black hover:text-blue-300 duration-700 " to="Inscription"> S’inscrire </RouterLink></p>

</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import {emitter} from '../../main';
export default {
  name: "MonCompteView",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
      view: false,
      type: "password",
      ImageData: null,
    };
  },
  computed: {},
  mounted() {
    this.message = "user non connecté";
  // Ecoute de l'évènement de connexion
  emitter.on('connectUser',e => {
    // Récupération du user
    this.user- e.user;
    console.log("App=>Reception user connecté",this.user);
  }),
  // Ecoute de l'évènement de deconnexion
  emitter.on('deConnectUser',e =>{
    // Récupération user
    this.user-e.user;
    console.log("App=>Reception user deconnecté",this.user);
  })
  },
  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          emitter.emit('connectUser', {user: this.user});
          console.log("user", this.user);
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("errreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDncx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "user non connecté";
          this.user = {
            email: null,
            password: null,
          };
          emitter.emit('deConnectUser', {user: this.user});
        })
        .catch((error) => {
          console.log("erreur deconnexion", this.error);
        });
    },
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>