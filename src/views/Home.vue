<template>
    <!-- <div>
        <ul v-for="item in useItem.documents" :key="item.id">
            <li>{{ item.cantidad}}</li>
            <li>{{ item.fechaIngreso }}</li>
            <li>{{ item.nameItem }}</li>
            <li>{{ item.id }}</li>


        </ul>
    </div> -->

    <div class="row margen">
        <div class="col-xl-9 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="p-4 border rounded">
                        <form class="row g-3 needs-validation" novalidate @submit.prevent="handleSubmit">
                            <div class="col-md-6">
                                <label for="validationCustom01" class="form-label">Nombre Item</label>
                                <input type="text" class="form-control" id="validationCustom01" v-model.trim="nameItem" required>
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom02" class="form-label">Id Item</label>
                                <input type="text" class="form-control" id="validationCustom02" v-model.trim="idItem" required>
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustomUsername" class="form-label">Codigo Item</label>
                                <div class="input-group has-validation">
                                    <input type="text" class="form-control" id="validationCustomUsername" v-model.trim="sku"
                                        aria-describedby="inputGroupPrepend" required>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom03" class="form-label">Precio unitario</label>
                                <input type="text" class="form-control" id="validationCustom03" v-model.trim="precioUnitario" required>
                                <div class="invalid-feedback">Please provide a valid city.</div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom04" class="form-label">Precio Venta</label>
                                <input class="form-control" id="validationCustom04" v-model.trim="precioVenta" required>
                                <div class="invalid-feedback">Please select a valid state.</div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">Cantidad</label>
                                <input type="text" class="form-control" id="validationCustom05" v-model.trim="cantidad" required>
                                <div class="invalid-feedback">Please provide a valid zip.</div>
                            </div>
                            <div class="col-md-5">
                                <label for="validationCustom05" class="form-label">Fecha de ingreso</label>
                                <input type="date" class="form-control" id="validationCustom05" v-model.trim="fechaIngreso" required>
                                <div class="invalid-feedback">Please provide a valid zip.</div>
                            </div>
                            
                            <div class="col-12 centrado">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {itemDatabase} from "@/store/itemDatabase.js"
import { async } from "@firebase/util";
import { onMounted } from "vue";
import {ref} from "vue"

const useItem = itemDatabase();


const nameItem = ref("");
const idItem = ref("");
const sku = ref("");
const precioUnitario = ref();
const precioVenta = ref();
const cantidad = ref();
const fechaIngreso = ref();

const handleSubmit =async () =>{
    


    console.log(useItem.documents[0])
}

onMounted(async() =>{
    nameItem.value = await useItem.documents[0].nameItem
    idItem.value = await useItem.documents[0].idItem
    sku.value = await useItem.documents[0].sku
    precioUnitario.value = await useItem.documents[0].precioUnitario
    precioVenta.value = await useItem.documents[0].precioVenta
    cantidad.value = await useItem.documents[0].cantidad
    fechaIngreso.value = await useItem.documents[0].fechaIngreso
})

useItem.getItems();
    
</script>

<style  scoped>


</style>