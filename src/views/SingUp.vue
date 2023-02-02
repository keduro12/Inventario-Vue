<template>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-md-7 mx-auto mt-5">
                    <div class="card radius-10">
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h4>Sign Up</h4>
                                <p>Crea una cuenta</p>
                            </div>
                            <form class="form-body row g-3" @submit.prevent="handleSubmit">
                                <div class="col-12">
                                    <label for="inputName" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="inputName" v-model.trim="name">
                                </div>
                                <div class="col-12">
                                    <label for="inputEmail" class="form-label">Correo</label>
                                    <input type="email" class="form-control" id="inputEmail" v-model.trim="email">
                                </div>
                                <div class="col-12">
                                    <label for="inputPassword" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="inputPassword"
                                        v-model.trim="password">
                                </div>
                                <div class="col-12 col-lg-12">
                                    <div class="d-grid">
                                        <button type="sunmit" class="btn btn-primary">Crear
                                            cuenta</button>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12">
                                    <div class="position-relative border-bottom my-3">
                                        <div class="position-absolute seperator translate-middle-y">or continue with
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12">
                                    <div
                                        class="social-login d-flex flex-row align-items-center justify-content-center gap-2 my-2">
                                        <a href="javascript:;" class=""><img src="assets/images/icons/facebook.png"
                                                alt=""></a>
                                        <a href="javascript:;" class=""><img
                                                src="assets/images/icons/apple-black-logo.png" alt=""></a>
                                        <a href="javascript:;" class=""><img src="assets/images/icons/google.png"
                                                alt=""></a>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12 text-center">
                                    <p class="mb-0">Ya tienes cuenta? <router-link to="/login">Iniciar Sesion
                                        </router-link>
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
                <div class="text-center">
                    <p class="my-4">Copyright © 2021 UI Admin by Codervent.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
    import Swal from 'sweetalert2';
    import {
        useUserStore
    } from "@/store/user.js"
    import {
        ref
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
    })

    const useStore = useUserStore();

    const email = ref();
    const password = ref();
    const name = ref();

    const handleSubmit =async () => {

        if (email.value && password.value && name.value) {

            if (password.value.length > 6) {

                await useStore.registerUser(email.value, password.value)

                if (useStore.orror == "auth/email-already-in-use") {
                    Toast.fire({
                    position: 'bottom',
                    icon: 'error',
                    title: "El email ya se encuentra registrado",
                    showConfirmButton: false,
                    timer: 3000,
                    });
                }

                if (useStore.orror == "auth/invalid-email") {
                    Toast.fire({
                    position: 'bottom',
                    icon: 'error',
                    title: "Ingrese un email valido",
                    showConfirmButton: false,
                    timer: 3000,
                    });
                }

            } else {
                Toast.fire({
                    position: 'bottom',
                    icon: 'warning',
                    title: 'La contraseña debe tener mas de 6 carateres',
                    showConfirmButton: false,
                    timer: 3000,
                });
            }


        } else {

            Toast.fire({
                    position: 'bottom',
                    icon: 'error',
                    title: "Complete todos los campos",
                    showConfirmButton: false,
                    timer: 3000,
            });
        }
        // Toast.fire({
        //             position: 'bottom',
        //             icon: 'error',
        //             title: `${useStore.orror}`,
        //             showConfirmButton: false,
        //             timer: 3000,
        //     });

        // useStore.registerUser(email.value, password.value)
    }
</script>

<style scoped>

</style>