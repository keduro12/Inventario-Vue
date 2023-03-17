<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-5 col-md-7 mx-auto  login">
          <div class="card radius-10">
            <div class="card-body p-4">
              <div class="text-center">
                <h4>Iniciar Sesion</h4>
                <p>Inicia sesión con tu cuenta</p>
              </div>
              <form class="form-body row g-3" @submit.prevent="handleSubmit">
                <div class="col-12">
                  <label for="inputEmail" class="form-label">Correo</label>
                  <input type="email" class="form-control" id="inputEmail" v-model.trim="formData.email">
                  <span class="letra" v-for="error in v$.email.$errors">{{ error.$message }}</span>
                </div>
                <div class="col-12">
                  <label for="inputPassword" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="inputPassword" v-model.trim="formData.password">
                  <span class="letra" v-for="error in v$.password.$errors">{{ error.$message }}</span>
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
                  <p class="mb-0">No tienes cuenta? <router-link to="/signup">Crear Cuenta</router-link>
                  </p>
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
  import Swal from "sweetalert2"
  import {
    useVuelidate
  } from '@vuelidate/core'
  import {
    required,
    helpers,
    minLength,
    email
  } from '@vuelidate/validators'

  import {
    useUserStore
  } from "@/store/user.js"
  import {
    useRouter
  } from "vue-router";
  import {
    reactive
  } from 'vue'
  import {
    async
  } from "@firebase/util";



  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  const userStore = useUserStore();
  const router = useRouter();

  const formData = reactive({
    email: "",
    password: ""
  });


  const rules = {
    email: {
      required: helpers.withMessage("Debe ingresar un email", required),
      email: helpers.withMessage("Debe ingresar un Email Valido", email)
    },
    password: {
      required: helpers.withMessage("Debe ingresar la contraseña", required),
      minLength: helpers.withMessage("La contraseña debe contener mas de 5 caracteres", minLength(6))
    }
  };

  const v$ = useVuelidate(rules, formData, {
    $lazy: true
  });



  const handleSubmit = async () => {

    const result = await v$.value.$validate();

    if (result) {

      const error = await userStore.startSesion(formData.email, formData.password)

      if (!error) {
        Toast.fire({
          position: 'bottom',
          icon: 'success',
          title: "Sesión Iniciada",
          showConfirmButton: false,
          timer: 3000,
        })

      } else {
        if (error === "auth/wrong-password") {
          Toast.fire({
            position: 'bottom',
            icon: 'error',
            title: "Contraseña incorrecta",
            showConfirmButton: false,
            timer: 3000,
          })
        }

        if (error == "auth/user-not-found") {
          Toast.fire({
            position: 'bottom',
            icon: 'error',
            title: "Este usuario no se encuentra registrado",
            showConfirmButton: false,
            timer: 3000,
          })
        }
      }

    }
  }
</script>

<style scoped>
  .login {
    margin-top: 150px;
  }


  .letra {
    display: flex;
    text-align: center;
    justify-content: center;
    color: red;
    opacity: 50%;
    margin-top: 5px;

  }
</style>