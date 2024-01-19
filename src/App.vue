<script setup>
import NavBar from "./layout/NavBar.vue"
</script>

<template>
  <main>
    <NavBar/>
    <div>
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped></style>
