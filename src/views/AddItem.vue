<template>
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
                                <button class="btn btn-primary" type="submit">Agregar</button>
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
import {ref} from "vue"

const useItemData = itemDatabase();

const nameItem = ref("");
const idItem = ref("");
const sku = ref("");
const precioUnitario = ref();
const precioVenta = ref();
const cantidad = ref();
const fechaIngreso = ref();


const handleSubmit = () =>{
    console.log(nameItem.value, idItem.value, sku.value, precioUnitario.value, precioVenta.value, cantidad.value, fechaIngreso.value)
    useItemData.setItem(nameItem.value, idItem.value, sku.value, precioUnitario.value, precioVenta.value, cantidad.value, fechaIngreso.value)

    console.log(nameItem.value, idItem.value, sku.value, precioUnitario.value, precioVenta.value, cantidad.value, fechaIngreso.value)
}



// if(handleSubmit()){
        
//         nameItem.value = null;
//         idItem.value = null;
//         sku.value = null;
//         precioUnitario.value = null;
//         precioVenta.value = null;
//         cantidad.value = null;
//         fechaIngreso.value = null;

//     }
</script>

<style scoped>

.margen{
    margin-top: 150px;
}
.centrado{
    text-align: center;

}

</style>