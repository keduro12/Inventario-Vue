<template>
    <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-5 col-md-7 mx-auto  login" >
          <div class="card radius-10">
            <div class="card-body p-4">
              <div class="text-center">
                <h4>Iniciar Sesion</h4>
                <p>Inicia sesión con tu cuenta</p>
              </div>
              <form class="form-body row g-3" @submit.prevent="handleSubmit" >
                <div class="col-12">
                  <label for="inputEmail" class="form-label">Correo</label>
                  <input type="email" class="form-control" id="inputEmail" v-model.trim="email">
                </div>
                <div class="col-12">
                  <label for="inputPassword" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="inputPassword" v-model.trim="password">
                </div>
                <div class="col-12 col-lg-6">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckRemember">
                    <label class="form-check-label" for="flexSwitchCheckRemember">Recordar</label>
                  </div>
                </div>
                <div class="col-12 col-lg-6 text-end">
                  <a href="authentication-reset-password-simple.html">Olvidaste la contraseña?</a>
                </div>
                <div class="col-12 col-lg-12">
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Sign In</button>
                  </div>
                </div>
                <div class="col-12 col-lg-12 text-center">
                  <p class="mb-0">No tienes cuenta? <router-link to="/signup">Crear Cuenta</router-link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="my-5">
      <div class="container">
        <div class="d-flex align-items-center gap-4 fs-5 justify-content-center social-login-footer">
          <a href="javascript:;">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="javascript:;">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="javascript:;">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
        <div class="text-center">
          <p class="my-4">Copyright © 2023 Keduro Iventario by KEDURO.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

import {useUserStore} from "@/store/user.js"
import { useRoute, useRouter } from "vue-router";
import {ref} from 'vue'
import { async } from "@firebase/util";



const email = ref();
const password = ref();

const userStore = useUserStore();
const router = useRouter();

const handleSubmit = async () =>{

  // userStore.registerUser(email.value, password.value)
  await userStore.startSesion(email.value, password.value)
  console.log("antes");
  router.push("/")
  console.log("despues");
}

</script>

<style scoped>
  .login{
    margin-top: 150px;   
  }
</style>