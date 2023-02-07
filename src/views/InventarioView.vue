<template>
    <div class="card">
        <div class="card-body">
            <div class="table-responsive">
                <table id="example" class="table table-striped table-bordered" style="width:100%">
                    <thead >
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
import {itemDatabase} from "@/store/itemDatabase.js"


const useDataBase = itemDatabase();

useDataBase.getItems()
</script>

<style scoped>

</style>