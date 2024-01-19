<template>
  <div class="flex items-center justify-between w-full gap-2 p-2 style-navbar">
    <div class="flex items-center justify-between gap-2 p-2 rounded-lg">
      <!-- <font-awesome-icon icon="fa-solid fa-code" size="2xl" /> -->
      <span class="text-xl font-lobster">ArthurCorrea</span>
    </div>
    <nav class="flex items-center justify-between gap-4">
      <span class="style-link">Home</span>
    </nav>

    <div></div>
  </div>
</template>
<script setup></script>

<style scoped>
.style-navbar {
  @apply bg-gray-50 text-gray-800 border-b border-gray-200;
}
.style-link {
  @apply font-bold text-sm  p-2;
}
</style>
