<template>
    <div>
        <!-- <ul v-for="item in useItem.documents" :key="item.id">
            <li>{{ item.cantidad}}</li>
            <li>{{ item.fechaIngreso }}</li>
            <li>{{ item.nameItem }}</li>
            <li>{{ item.id }}</li>


        </ul> -->
    </div>

</template>

<script setup>
import {itemDatabase} from "@/store/itemDatabase.js"

const useItem = itemDatabase();

    
</script>

<style  scoped>
</style>