<template>
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="card radius-10">
                <div class="card-body">
                    <form @submit.prevent="updateDisplayName()">
                        <h5 class="mb-3">Editar Perfil</h5>
                        <div class="mb-4 d-flex flex-column gap-3 align-items-center justify-content-center">
                            <div class="user-change-photo shadow">
                                <img :src="useUser.userData.photoURL" alt="...">
                            </div>
                            <input type="file" class="btn btn-outline-primary btn-sm radius-30 px-4" accept="image/png, .jpg, .webp" v-on:change="onFileSelected">
                                <!-- <ion-icon name="image-sharp"></ion-icon>Cambiar fotografia -->
                            
                        </div>
                        <h5 class="mb-0 mt-4">Información de usuario</h5>
                        <hr>
                        <div class="row g-3">
                            <div class="col-6">
                                <label class="form-label">DisplayName</label>
                                <input type="text" class="form-control" v-model.trim="useUser.userData.displayName">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Email</label>
                                <input type="text" class="form-control" v-model.trim="useUser.userData.email" disabled>
                            </div>
                            <div class="col-6">
                                <label class="form-label">Primer Nombre</label>
                                <input type="text" class="form-control" value="muy pronto!">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Primer apellido</label>
                                <input type="text" class="form-control" value="muy pronto!" disabled>
                            </div>
                        </div>
                        <div class="text-start mt-3">
                            <button type="submit" class="btn btn-primary px-4">Guardar</button>
                        </div>
                    </form>
                </div>    
            </div>
        </div>
    </div>
</template>

<script setup>
  import {
    useUserStore
  } from "@/store/user"

import { reactive } from 'vue';


const useUser = useUserStore();

const formData = reactive({
    displayName: '',
    fotoUrl: '',
})

const onFileSelected = (event) =>{
    formData.fotoUrl = event.target.files[0]
    console.log( formData.fotoUrl)
}

const updateDisplayName = async () =>{
    const error = await useUser.updateUser(useUser.userData.displayName, formData.fotoUrl)

} 
</script>

<style scoped>

</style>