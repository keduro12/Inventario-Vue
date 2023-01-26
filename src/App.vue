<template>

  <div v-if="$route.name=='login'">
    <router-view></router-view>
  </div>

  <div v-else-if="$route.name=='NotFound'">
    <router-view></router-view>
  </div>

  <div v-else-if="$route.name=='signup'">
    <router-view></router-view>
  </div>

  <div v-else>
    <MenuHeader></MenuHeader>
  </div>

</template>

<script setup>
  import MenuHeader from "@/components/MenuHeader.vue"
</script>

<style scoped>

</style>