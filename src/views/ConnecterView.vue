<!-- <template>
    <div class="">
        <div class="">
            <h5 class="text-white">Connexion</h5>
        </div> 

                <form @submit.prevent="onCnx">
                    <div class="">                          
                        <div class="">
                            <div class=" mb-3">
                                <div class="i">
                                    <span class="" >Email</span>
                                </div>
                                <input 
                                    class="" placeholder="Adresse mail" type="email"
                                    v-model="user.email" required />                    
                            </div>
                            <div class=" mb-3">
                                <div class="">
                                    <span class="" >Mot de passe</span>
                                </div>
                                <input 
                                    class="" placeholder="Mot de passe" 
                                    :type="type" v-model="user.password" required
                                    />                    
                                    <div class="">
                                        <button class="" @click.prevent="affiche()">
                                            
                                        </button>
                                    </div>
                            </div>
                        </div>    

                        <div class="" role="alert">
                            {{message}}
                        </div>
                    </div>

                    <div class="">   
                        <button type="submit" class="" >
                            Connexion
                        </button>
                        <button type="button" class=""
                            @click="onDcnx()" >
                            Deconnexion
                        </button>
                    </div>
                </form>
            </div>
</template>
<script>
// Import des fonction d'authentification
import { 
    getAuth,                        // Fonction générale d'authentification
    signInWithEmailAndPassword,     // Se connecter avec un email + mot de passe
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

//Import de l'emetteur depuis main.js
import { emitter } from '../main.js';

export default {
    name:'MonCompte',
    data() {
        return {
            user:{              // Utilisateur : email + mot de passe
                email : '',
                password : ''
            },
            message:null,       // Message de connexion
            view:false,         // Afficher / cacher le mot de passe
            type:'password',    // Type de champs pour le password : password / text pour l'afficher
            imageData:null,     // Image prévisualisée pour création compte
        }
    },
    mounted(){ // Montage de la vue
        this.message = "User non connecté";
    },
    methods:{

        onCnx(){                
            // Se connecter avec user et mot de passe           
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response)=>{
                // Connexion OK - mise à jour du user
                this.user = response.user;
                // Emission evenement de connexion
                emitter.emit('connectUser', { user: this.user });
                console.log("user",this.user);                
                // Mise à jour du message
                this.message = "User connecté : "+this.user.email;
            })
            .catch((error) =>{
                // Erreur de connexion
                console.log('Erreur connexion', error);
                this.message = "Erreur d'authentification";
            })
        },
        
        // Se deconnecter
        onDcnx(){
            // Se déconnecter
            signOut(getAuth())
            .then(response =>{
                // Mise à jour du message
                this.message = "User non connecté";
                // Ré initialisation des champs
                this.user = {
                    email:null,
                    password:null
                };
                // Emission évènement de déconnexion
                emitter.emit('deConnectUser', { user: this.user });
            })
            .catch(error=>{
                console.log('erreur deconnexion ', error);
            })
        },

        // Affiche/masque le champs password
        affiche(){
            this.view = !this.view;
            if(this.view)   {this.type = 'text'; }
            else            {this.type = 'password'; }
        },

        previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },

    }
}
</script> -->
