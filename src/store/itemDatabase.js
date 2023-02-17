import { addDoc, collection, deleteDoc, doc, getDocs, query, where, getDoc, updateDoc } from "firebase/firestore/lite"
import {defineStore} from "pinia"
import { db } from "@/firebaseConfig"
import { auth } from "@/firebaseConfig"

export const itemDatabase = defineStore("item", {
    state: () => ({
        documents: [],
        clear: false,
        orror: false,
        result : null,
        loader: false
    }),


    actions: {
        async getItems(){
            this.loader = true;

            if(this.documents.length !== 0){
                this.loader = false
                return;
            }

            try {
                const q = query(collection(db, "producto"), where("user", "==", auth.currentUser.uid))
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) =>{
                    this.documents.push({
                        id: doc.id,
                        ...doc.data()
                    })
                    // console.log(doc.id, doc.data())
                    
                })
                this.loader = false

            } catch (error) {
                console.log(error)
            }finally{
                
            }
        },

        async setItem(nameItem, idItem, sku, precioUnitario, precioVenta, cantidad, fechaIngreso){
            try {
                this.clear = false;
                const objectDoc = {
                    nameItem: nameItem,
                    idItem: idItem,
                    sku: sku,
                    precioUnitario: precioUnitario,
                    precioVenta: precioVenta,
                    cantidad: cantidad,
                    fechaIngreso: fechaIngreso,
                    user: auth.currentUser.uid
                };
                const docRef = await addDoc(collection(db, "producto"), objectDoc)

                console.log(docRef.id)

                this.result = docRef.id;

                console.log(this.result + "  ef")


                // console.log(docRef)
                this.documents.push({
                    ...objectDoc,
                    id: docRef.id,
                });
            } catch (error) {
                this.orror = error.code
                console.log(error)
            }finally{
                this.clear = true;
            }
        },

        async showItem(id){
            try {
                const docRef = doc(db, "producto", id)
                const docSnap = await getDoc(docRef);
                
                return{
                    nameItem: docSnap.data().nameItem,
                    idItem: docSnap.data().idItem,
                    sku: docSnap.data().sku,
                    precioUnitario: docSnap.data().precioUnitario,
                    precioVenta : docSnap.data().precioVenta,
                    cantidad: docSnap.data().cantidad,
                    fechaIngreso: docSnap.data().fechaIngreso,
                }


                if (!docSnap.exists()) {
                    throw new Error('Ese documento no existe')
                }

                if (auth.currentUser.uid !== docSnap.data().user) {
                    throw new Error("Ese documento no te pertenece")
                }



            } catch (error) {

                console.log(error)
            }finally{
                
            }
        },

        async updateItem(id, nameItem, idItem, sku, precioUnitario, precioVenta, cantidad, fechaIngreso){
            try {
                const docRef = doc(db, "producto", id)
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    throw new Error('Ese documento no existe')
                }

                if (auth.currentUser.uid !== docSnap.data().user) {
                    throw new Error("Ese documento no te pertenece")
                }


                await updateDoc(docRef, {
                    nameItem: nameItem,
                    idItem: idItem,
                    sku: sku,
                    precioUnitario: precioUnitario,
                    precioVenta : precioVenta,
                    cantidad: cantidad,
                    fechaIngreso: fechaIngreso,
                })

                this.documents = this.documents.map((item) => 
                    item.id === id ? {...item, nameItem: nameItem,
                    idItem: idItem,
                    sku: sku,
                    precioUnitario: precioUnitario,
                    precioVenta : precioVenta,
                    cantidad: cantidad,
                    fechaIngreso: fechaIngreso} : item
                );
            } catch (error) {
                console.log(error.messsage)
            }
        },


        async deleteItem(id){
            try {
                const docRef = await doc(db, "producto", id)
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    throw new Error('Ese documento no existe')
                }

                if (auth.currentUser.uid !== docSnap.data().user) {
                    throw new Error("Ese documento no te pertenece")
                }

                const docDelete = await deleteDoc(docRef)
                this.documents = this.documents.filter(item => item.id !== id)
            } catch (error) {
                console.log(error.messsage)
            }finally{
                
            }
        }
    }

})