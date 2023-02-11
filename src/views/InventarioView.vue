<template>
    <div class="card">
        <div class="card-body">
            <div class="table-responsive">
                <table id="example" class="table table-striped table-bordered" style="width:100%">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Id Item</th>
                            <th>SKU</th>
                            <th>Precio Unitario</th>
                            <th>Precio Venta</th>
                            <th>Cantidad</th>
                            <th>Fecha de Ingreso</th>
                            <th>Opción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in useItem.documents" :key="item.id">
                            <td>{{item.nameItem}}</td>
                            <td>{{item.idItem}}</td>
                            <td>{{ item.sku }}</td>
                            <td>{{item.precioUnitario}}</td>
                            <td>{{ item.precioVenta }}</td>
                            <td>{{ item.cantidad }}</td>
                            <td>{{ item.fechaIngreso }}</td>
                            <td>{{ item.id }}</td>

                            <div class="card-body centericonos">
                                <i class="cursorPointer mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                    @click="handleSubmit(item.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-pen-fill" viewBox="0 0 16 16">
                                        <path
                                            d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                                    </svg>
                                </i>
                                <i class="cursorPointer mx-2" @click="useItem.deleteItem(item.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                    </svg>
                                </i>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="p-3 border rounded">
                                                <form class="row g-3 needs-validation" novalidate>
                                                    <div class="col-md-6">
                                                        <label for="validationCustom01" class="form-label">Nombre
                                                            Item</label>
                                                        <input type="text" class="form-control" id="validationCustom01"
                                                            v-model.trim="nameItem_1" required>
                                                        <div class="valid-feedback">Looks good!</div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom02" class="form-label">Id
                                                            Item</label>
                                                        <input type="text" class="form-control" id="validationCustom02"
                                                            v-model.trim="idItem_1" required>
                                                        <div class="valid-feedback">Looks good!</div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustomUsername" class="form-label">Codigo
                                                            Item</label>
                                                        <div class="input-group has-validation">
                                                            <input type="text" class="form-control"
                                                                id="validationCustomUsername" v-model.trim="sku_1"
                                                                aria-describedby="inputGroupPrepend" required>
                                                            <div class="invalid-feedback">Please choose a username.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom03" class="form-label">Precio
                                                            unitario</label>
                                                        <input type="text" class="form-control" id="validationCustom03"
                                                            v-model.trim="precioUnitario_1" required>
                                                        <div class="invalid-feedback">Please provide a valid city.</div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="validationCustom04" class="form-label">Precio
                                                            Venta</label>
                                                        <input class="form-control" id="validationCustom04"
                                                            v-model.trim="precioVenta_1" required>
                                                        <div class="invalid-feedback">Please select a valid state.</div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="validationCustom05"
                                                            class="form-label">Cantidad</label>
                                                        <input type="text" class="form-control" id="validationCustom05"
                                                            v-model.trim="cantidad_1" required>
                                                        <div class="invalid-feedback">Please provide a valid zip.</div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <label for="validationCustom05" class="form-label">Fecha de
                                                            ingreso</label>
                                                        <input type="date" class="form-control" id="validationCustom05"
                                                            v-model.trim="fechaIngreso_1" required>
                                                        <div class="invalid-feedback">Please provide a valid zip.</div>
                                                    </div>

                                                    <!-- <div class="col-12 centrado">
                                            <button class="btn btn-primary" type="submit">Submit form</button>
                                        </div> -->
                                                </form>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" @click="update(item.id)">Understood</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </tr>

                    </tbody>
                    <tfoot>
                        <div class="dataTables_paginate paging_simple_numbers" id="example_paginate">
                            <ul class="pagination">
                                <li class="paginate_button page-item previous disabled" id="example_previous"><a
                                        href="#" aria-controls="example" data-dt-idx="0" tabindex="0"
                                        class="page-link">Prev</a></li>
                                <li class="paginate_button page-item active"><a href="#" aria-controls="example"
                                        data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example"
                                        data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example"
                                        data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example"
                                        data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example"
                                        data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="example"
                                        data-dt-idx="6" tabindex="0" class="page-link">6</a></li>
                                <li class="paginate_button page-item next" id="example_next"><a href="#"
                                        aria-controls="example" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
                                </li>
                            </ul>

                        </div>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
        itemDatabase
    } from "@/store/itemDatabase.js"
    import {
        useRouter
    } from "vue-router";
    import {
        async
    } from "@firebase/util";
    import {
        ref
    } from "vue"
    import {
        onMounted
    } from "vue";

    const router = useRouter();
    const useItem = itemDatabase();


    const nameItem_1 = ref("");
    const idItem_1 = ref("");
    const sku_1 = ref("");
    const precioUnitario_1 = ref();
    const precioVenta_1 = ref();
    const cantidad_1 = ref();
    const fechaIngreso_1 = ref();

    
    const handleSubmit = async (id) => {

        const {
            nameItem,
            idItem,
            sku,
            precioUnitario,
            precioVenta,
            cantidad,
            fechaIngreso
        } = await useItem.showItem(id)

        console.log(id)

        nameItem_1.value = nameItem,
        idItem_1.value = idItem,
        sku_1.value = sku,
        precioUnitario_1.value = precioUnitario,
        precioVenta_1.value = precioVenta,
        cantidad_1.value = cantidad,
        fechaIngreso_1.value = fechaIngreso

    }

    const update = async (id) =>{
        await useItem.updateItem(id, nameItem_1.value,  idItem_1.value, sku_1.value,  precioUnitario_1.value, precioVenta_1.value, cantidad_1.value,  fechaIngreso_1.value)

        console.log(id)
    }

    useItem.getItems();
</script>

<style scoped>
    .centericonos {
        text-align: center;
    }

    .red {
        border: 1px solid red;
    }

    .cursorPointer {
        cursor: pointer;
    }
</style>