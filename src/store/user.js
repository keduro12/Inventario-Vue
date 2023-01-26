import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";


export const useUserStore = defineStore('user', {
    state: () => ({
        userData: null,
    }),

    getters:{
        
    },

    actions: {
        async registerUser(email, password){
            try {
                const createUser = await createUserWithEmailAndPassword(auth, email, password)
                const respuesta = createUser.user
                console.log(respuesta);
                this.userData = {email: respuesta.email, uid: respuesta.uid}


            } catch (error) {
                console.log(error);
            }
        },

        async startSesion(email, password){

            try {
                const Sesion = await signInWithEmailAndPassword(auth, email, password)
                const respuesta = Sesion.user;
                console.log(respuesta);
                this.userData = {email: respuesta.email, uid: respuesta.uid}

            } catch (error) {
                console.log(error)
            }            
        }


    }


})


//Tara Rico