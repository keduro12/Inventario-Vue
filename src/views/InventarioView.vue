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
                        <tr v-for="item in useDataBase.documents" :key="item.id">
                            <td>{{item.nameItem}}</td>
                            <td>{{item.idItem}}</td>
                            <td>{{ item.sku }}</td>
                            <td>{{item.precioUnitario}}</td>
                            <td>{{ item.precioVenta }}</td>
                            <td>{{ item.cantidad }}</td>
                            <td>{{ item.fechaIngreso }}</td>
                            
                            <div class="card-body"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" router.push="/additem"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete">
                                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                                    <line x1="18" y1="9" x2="12" y2="15"></line>
                                    <line x1="12" y1="9" x2="18" y2="15"></line>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-edit">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
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
    import { useRouter } from "vue-router";


    const useDataBase = itemDatabase();
    const router = useRouter();

    useDataBase.getItems()
</script>

<style scoped>

</style>