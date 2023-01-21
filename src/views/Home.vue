<template>
    <div>
        <h1> este es el count - {{store.count }}</h1>
        <h2>Este es el getter {{ store.doble }}</h2>

        <button @click="incrementar"> este es el avlor- {{ store.count }}</button>
    </div>
</template>

<script setup>
    import {useUserStore} from "@/store/user.js"

    const store = useUserStore()

    const incrementar = () =>{
        store.increment();
    }

</script>

<style  scoped>


</style>