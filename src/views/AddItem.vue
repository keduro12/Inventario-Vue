<template>
    <div class="row margen">
        <div class="col-xl-9 mx-auto">
            <div class="card">
                <div class="card-body">
                    <div class="p-4 border rounded">
                        <form class="row g-3 needs-validation" novalidate @submit.prevent="handleSubmit()">
                            <div class="col-md-6">
                                <label for="validationCustom01" class="form-label">Nombre Item</label>
                                <input type="text" class="form-control" id="validationCustom01" @blur="v$.nameItem.$touch()"
                                    v-model.trim="formData.nameItem" required>
                                <span class="letra" v-for="error in v$.nameItem.$errors"
                                    :key="error.$uid">{{ error.$message }}</span>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom02" class="form-label">Id Item</label>
                                <input type="text" class="form-control" id="validationCustom02" @blur="v$.idItem.$touch()"
                                    v-model.trim="formData.idItem" required>
                                <span class="letra" v-for="error in v$.idItem.$errors"
                                    :key="error.$uid">{{ error.$message }}</span>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustomUsername" class="form-label">Codigo Item</label>
                                <div class="input-group has-validation">
                                    <input type="text" class="form-control" id="validationCustomUsername" @blur="v$.sku.$touch()"
                                        v-model.trim="formData.sku" aria-describedby="inputGroupPrepend" required>

                                </div>
                                <span class="letra" v-for="error in v$.sku.$errors"
                                    :key="error.$uid">{{ error.$message }}</span>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom03" class="form-label">Precio unitario</label>
                                <input type="text" class="form-control" id="validationCustom03"
                                    @blur="v$.precioUnitario.$touch()" v-model.trim="formData.precioUnitario" required>
                                <span class="letra" v-for="error in v$.precioUnitario.$errors"
                                    :key="error.$uid">{{ error.$message }}</span>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom04" class="form-label">Precio Venta</label>
                                <input class="form-control" id="validationCustom04" @blur="v$.precioUnitario.$touch()" v-model.trim="formData.precioVenta" 
                                    required>
                                <span class="letra" v-for="error in v$.precioVenta.$errors"
                                    :key="error.$uid">{{ error.$message }}</span>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">Cantidad</label>
                                <input type="text" class="form-control" id="validationCustom05" @blur="v$.cantidad.$touch()"
                                    v-model.trim="formData.cantidad" required>
                                <span class="letra" v-for="error in v$.cantidad.$errors"
                                    :key="error.$uid">{{ error.$message }}</span>
                            </div>
                            <div class="col-md-5">
                                <label for="validationCustom05" class="form-label">Fecha de ingreso</label>
                                <input type="date" class="form-control" id="validationCustom05" @blur="v$.fechaIngreso.$touch()"
                                    v-model.trim="formData.fechaIngreso" required>
                                <span class="letra" v-for="error in v$.fechaIngreso.$errors"
                                    :key="error.$uid">{{ error.$message }}</span>
                            </div>

                            <div class="col-12 centrado">
                                <button class="btn btn-primary" type="submit">Agregar</button>
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
    import { useVuelidate } from '@vuelidate/core'
    import { required,email,helpers,numeric } from '@vuelidate/validators'
    import { itemDatabase } from "@/store/itemDatabase.js"
    import { async } from "@firebase/util";
    import { ref,computed,reactive } from "vue"
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
        nameItem: {
            required: helpers.withMessage("Debe ingresar el nombre del producto", required)
        },
        idItem: {
            required: helpers.withMessage("Debe ingresar el nombre del producto", required),
            numeric: helpers.withMessage("El valor debe ser numerico", numeric)
        },
        sku: {
            required: helpers.withMessage("Debe ingresar el SKU del producto", required)
        },
        precioUnitario: {
            required: helpers.withMessage("Debe ingresar el precio unitario del producto", required),
            numeric: helpers.withMessage("El valor debe ser numerico", numeric)
        },
        precioVenta: {
            required: helpers.withMessage("El precio de venta es necesario", required),
            numeric: helpers.withMessage("El valor debe ser numerico", numeric)
        },
        cantidad: {
            required: helpers.withMessage("Debe ingresar la cantidad de productos", required),
            numeric: helpers.withMessage("El valor debe ser numerico", numeric)
        },
        fechaIngreso: {
            required: helpers.withMessage("Debe ingresar la fecha de ingreso", required)
        },
    }

    const v$ = useVuelidate(rules, formData, {
        $lazy: true
    })

    const handleSubmit = async () => {

        const result = await v$.value.$validate()
        if (result) {

            await useItemData.setItem(formData.nameItem, formData.idItem, formData.sku, formData.precioUnitario,
            formData.precioVenta, formData.cantidad, formData.fechaIngreso)

            formData.nameItem = "",
            formData.idItem = "",
            formData.sku = "",
            formData.precioUnitario = "",
            formData.precioVenta = "",
            formData.cantidad = "",
            formData.fechaIngreso = "",

            v$.value.$reset();

        } else {
            console.log("formulario fallo")
        }

        if (useItemData.result) {
                Toast.fire({
                    position: 'bottom',
                    icon: 'success',
                    title: "Producto creado",
                    showConfirmButton: false,
                    timer: 3000,
                })
            }
    }
</script>

<style scoped>
    .margen {
        margin-top: 150px;
    }

    .centrado {
        text-align: center;

    }

    .letra {
        color: red;
        opacity: 50%;
        
    }
</style>