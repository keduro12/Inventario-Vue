<template>
    <div class="row margen">
        <div class="col-xl-9 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="p-4 border rounded">
                        <form class="row g-3 needs-validation" novalidate @submit.prevent="handleSubmit()">
                            <div class="col-md-6">
                                <label for="validationCustom01" class="form-label">Nombre Item</label> 
                                <input type="text" class="form-control" id="validationCustom01" v-model.trim="nameItem" required>
                                <span v-for="error in v$.nameItem.$errors" :key="error.$uid">{{ error.$message }}</span>                                                                
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom02" class="form-label">Id Item</label>
                                <input type="text" class="form-control" id="validationCustom02" v-model.trim="idItem" required>
                                    <span v-for="error in v$.idItem.$errors" :key="error.$uid">{{ error.$message }}</span> 
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustomUsername" class="form-label">Codigo Item</label>
                                <div class="input-group has-validation">
                                    <input type="text" class="form-control" id="validationCustomUsername" v-model.trim="sku" aria-describedby="inputGroupPrepend" required>
                                    
                                </div>
                                <span v-for="error in v$.sku.$errors" :key="error.$uid">{{ error.$message }}</span> 
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom03" class="form-label">Precio unitario</label>
                                <input type="text" class="form-control" id="validationCustom03"
                                    v-model.trim="precioUnitario" required>
                                    <span v-for="error in v$.precioUnitario.$errors" :key="error.$uid">{{ error.$message }}</span> 
                                </div>
                            <div class="col-md-4">
                                <label for="validationCustom04" class="form-label">Precio Venta</label>
                                <input class="form-control" id="validationCustom04" v-model.trim="precioVenta" required>
                                <span v-for="error in v$.precioVenta.$errors" :key="error.$uid">{{ error.$message }}</span> 
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">Cantidad</label>
                                <input type="text" class="form-control" id="validationCustom05" v-model.trim="cantidad"
                                    required>
                                    <span v-for="error in v$.cantidad.$errors" :key="error.$uid">{{ error.$message }}</span> 
                            </div>
                            <div class="col-md-5">
                                <label for="validationCustom05" class="form-label">Fecha de ingreso</label>
                                <input type="date" class="form-control" id="validationCustom05"
                                    v-model.trim="fechaIngreso" required>
                                    <span v-for="error in v$.fechaIngreso.$errors" :key="error.$uid">{{ error.$message }}</span> 
                                </div>

                            <div class="col-12 centrado">
                                <button class="btn btn-primary" type="submit" >Agregar</button>
                            </div>
                        </form>

                        <!-- <FormularioData :nameItem="nameItem" :idItem="idItem"  :sku="sku" :precioUnitario="precioUnitario" :precioVenta="precioVenta" :cantidad="cantidad" :fechaIngreso="fechaIngreso" 
                            @evento="handleSubmit"/> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import FormularioData from "@/components/FormularioData.vue"
    import {
        useVuelidate
    } from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    import {
        itemDatabase
    } from "@/store/itemDatabase.js"
    import {
        async
    } from "@firebase/util";
    import {
        ref,
        computed, reactive
    } from "vue"
    import Swal from "sweetalert2";

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

    const useItemData = itemDatabase();
    
    const formData = reactive({
        nameItem: "",
        idItem: "",
        sku: "",
        precioUnitario: "",
        precioVenta: "",
        cantidad: "",
        fechaIngreso: "",
    })

    const rules = {
        nameItem: { required},
        idItem: { required },
        sku: { required },
        precioUnitario: { required },
        precioVenta: { required },
        cantidad: { required },
        fechaIngreso: { required },
    }

    const v$ = useVuelidate(rules, formData)

    const handleSubmit = async () => {

        const result = await v$.value.$validate()

        console.log(v$ + " .... " + result)

        if(result){
            await useItemData.setItem(nameItem.value, idItem.value, sku.value, precioUnitario.value, precioVenta.value, cantidad.value, fechaIngreso.value)
            alert("formulario exitoso")
        }else{
            alert("formulario fallo")

        }


        await useItemData.setItem(nameItem.value, idItem.value, sku.value, precioUnitario.value, precioVenta.value, cantidad.value, fechaIngreso.value)


        // // if (useItemData.clear) {
        // //     Toast.fire({
        // //         position: 'bottom',
        // //         icon: 'success',
        // //         title: "Item agregado con exito!!!",
        // //         showConfirmButton: false,
        // //         timer: 3000,
        // //     })

        //         nameItem.value = null,
        //         idItem.value = null,
        //         sku.value = null,
        //         precioUnitario.value = null,
        //         precioVenta.value = null,
        //         cantidad.value = null,
        //         fechaIngreso.value = null

        }



































        // if (!nameItem.value || !idItem.value || !sku.value || !precioUnitario.value || !precioVenta.value || !
        //     cantidad.value || !fechaIngreso.value) {

        //     Toast.fire({
        //         position: 'bottom',
        //         icon: 'error',
        //         title: "Debe llenar todos los campos",
        //         showConfirmButton: false,
        //         timer: 3000,
        //     })

        // } else {


        //     if (useItemData.clear) {
        //         Toast.fire({
        //             position: 'bottom',
        //             icon: 'success',
        //             title: "Item agregado con exito!!!",
        //             showConfirmButton: false,
        //             timer: 3000,
        //         })

        //         nameItem.value = null,
        //         idItem.value = null,
        //         sku.value = null,
        //         precioUnitario.value = null,
        //         precioVenta.value = null,
        //         cantidad.value = null,
        //         fechaIngreso.value = null

        //     }

        //     if(useItemData.orror){
        //         Toast.fire({
        //             position: 'bottom',
        //             icon: 'error',
        //             title: useItemData.orror,
        //             showConfirmButton: false,
        //             timer: 3000,
        //         })
        //     }
        // }




        // console.log(nameItem.value, idItem.value, sku.value, precioUnitario.value, precioVenta.value,
        //     cantidad.value, fechaIngreso.value)
        // console.log(useItemData.clear)



</script>

<style scoped>
    .margen {
        margin-top: 150px;
    }

    .centrado {
        text-align: center;

    }
</style>