import {
    defineStore
} from "pinia";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
    auth
} from "@/firebaseConfig";
import router from "@/router";


export const useUserStore = defineStore('user', {
    state: () => ({
        userData: null,
        orror: null,
        curentUser: null

    }),

    getters: {

    },

    actions: {
        async registerUser(email, password) {
            try {
                const createUser = await createUserWithEmailAndPassword(auth, email, password)
                const respuesta = createUser.user
                console.log(respuesta);
                this.userData = {
                    email: respuesta.email,
                    uid: respuesta.uid
                }

                router.push("login")


            } catch (error) {
                console.log(error)
                this.orror = error.code;
            }
        },

        async startSesion(email, password) {
            try {
                const Sesion = await signInWithEmailAndPassword(auth, email, password)
                const respuesta = Sesion.user;
                console.log(respuesta);
                this.userData = {
                    email: respuesta.email,
                    uid: respuesta.uid
                }

                router.push("/")

            } catch (error) {
                console.log(error)
                this.orror = error.code;

                console.log(error.code + " este fue el error")
            }
        },

        async finishSesion() {
            try {
                await signOut(auth);
                this.userData = null;
                router.push("/login")
            } catch (error) {
                console.log(error);
                this.orror = error.code;
            }
        },

        currentUser() {

            // onAuthStateChanged (auth, (user)=>{
            //     if (user) {
            //         this.curentUser = user.uid;
            //         console.log(this.curentUser + "Usuario ss")
            //         console.log("Usuario autenticado")

            //         return console.log(user);
            //     }else{
            //         console.log("Usuario denegado")
            //     }
            // })
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(auth, user => {
                    if (user) {
                        this.userData = {
                            email: user.email,
                            uid: user.uid
                        }
                    } else {
                        this.userData = null;
                    }
                    resolve(user);
                }, e => reject(e))
                unsuscribe()
            })
        }


    }


})


//Tara Rico