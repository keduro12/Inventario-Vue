import { defineStore } from "pinia";


export const useUserStore = defineStore('user', {
    state: () =>{
        return { count: 0 } 
    },

    getters:{
        doble: (state) => state.count * 2,
    },

    actions: {
        increment(){
            this.count++
        }
    }


})