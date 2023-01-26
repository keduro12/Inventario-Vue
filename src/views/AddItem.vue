<template>
    <div class="row margen">
        <div class="col-xl-9 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="p-4 border rounded">
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-6">
                                <label for="validationCustom01" class="form-label">Nombre Item</label>
                                <input type="text" class="form-control" id="validationCustom01"  required>
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom02" class="form-label">Id Item</label>
                                <input type="text" class="form-control" id="validationCustom02"  required>
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustomUsername" class="form-label">Codigo Item</label>
                                <div class="input-group has-validation">
                                    <input type="text" class="form-control" id="validationCustomUsername"
                                        aria-describedby="inputGroupPrepend" required>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom03" class="form-label">Precio unitario</label>
                                <input type="text" class="form-control" id="validationCustom03" required>
                                <div class="invalid-feedback">Please provide a valid city.</div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom04" class="form-label">Precio Venta</label>
                                <select class="form-control" id="validationCustom04" required>
                                </select>
                                <div class="invalid-feedback">Please select a valid state.</div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">Cantidad</label>
                                <input type="text" class="form-control" id="validationCustom05" required>
                                <div class="invalid-feedback">Please provide a valid zip.</div>
                            </div>
                            <div class="col-md-5">
                                <label for="validationCustom05" class="form-label">Fecha de ingreso</label>
                                <input type="text" class="form-control" id="validationCustom05" required>
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

</script>

<style scoped>

.margen{
    margin-top: 150px;
}
.centrado{
    text-align: center;

}

</style>