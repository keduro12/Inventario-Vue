<template>
    <div>
        <form class="row g-3 needs-validation" novalidate @submit.prevent="$emit('evento')">
            <div class="col-md-6">
                <label for="validationCustom01" class="form-label">Nombre Item</label>
                <input type="text" class="form-control" id="validationCustom01" v-model.trim="props.nameItem" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom02" class="form-label">Id Item</label>
                <input type="text" class="form-control" id="validationCustom02" v-model.trim="props.idItem" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-3">
                <label for="validationCustomUsername" class="form-label">Codigo Item</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validationCustomUsername" v-model.trim="props.sku"
                        aria-describedby="inputGroupPrepend" required>
                    <div class="invalid-feedback">Please choose a username.</div>
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom03" class="form-label">Precio unitario</label>
                <input type="text" class="form-control" id="validationCustom03" v-model.trim="props.precioUnitario" required>
                <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom04" class="form-label">Precio Venta</label>
                <input class="form-control" id="validationCustom04" v-model.trim="props.precioVenta" required>
                <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom05" class="form-label">Cantidad</label>
                <input type="text" class="form-control" id="validationCustom05" v-model.trim="props.cantidad" required>
                <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-md-5">
                <label for="validationCustom05" class="form-label">Fecha de ingreso</label>
                <input type="date" class="form-control" id="validationCustom05" v-model.trim="props.fechaIngreso" required>
                <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>

            <div class="col-12 centrado">
                <button class="btn btn-primary" type="submit">Agregar</button>
            </div>
        </form>
    </div>
</template>

<script setup>

const props = defineProps(['nameItem', 'idItem', 'sku', 'precioUnitario', 'precioVenta', 'cantidad', 'fechaIngreso', 'evento'])
</script>

<style scoped>

</style>