<template>
    <div>
        <div class="d-flex flex-column gap-3 align-items-center justify-content-center">
            <span class="display_name">Bienvenido!</span></div>
        <div class="mb-4 d-flex flex-column gap-3 align-items-center justify-content-center container_img">
            <div class="user-change-photo shadow tamaño_img">
                <img :src="userStore.aphotoURL" alt="Perfil">
            </div>
            <span class="display_name">{{ userStore.adisplayName }}</span>
            <span class="display_name">{{ userStore.aemail }}</span>
        </div>
    </div>

</template>

<script setup>
    import { useUserStore } from "@/store/user.js"

    const userStore = useUserStore()
</script>

<style scoped>

    .container_img{
        display: flex;
    }
    .tamaño_img{
        margin-top: 40px;
        width: 400px;
        height: 400px;
        border-radius: 80px;
    }

    .display_name{
        margin-top: 15px;
        font-style: inherit;
        font-size: 30px;
        text-shadow: 1px 1px 1px black;
        
    }
</style>