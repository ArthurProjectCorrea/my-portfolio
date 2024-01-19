<template>
  <div class="w-full h-full style-landingPage">
    <div class="grid grid-cols-2 h-[1000px]">
      <div
        class="flex flex-col items-center justify-start col-span-1 gap-8 pt-72"
      >
        <div class="flex flex-col w-3/6 gap-2">
          <h1 class="text-h1">Hello! I’m Arthur</h1>
          <h1 class="text-h1">a digital designer</h1>
          <h1 class="text-h1">based in Sydney.</h1>
        </div>
        <div class="w-3/6">
          <p class="text-p">
            I thrive on tackling challenges and delivering outstanding results.
          </p>
          <p class="text-p">My expertise lies in ui/ux design.</p>
        </div>
        <div class="flex items-center justify-start w-3/6 gap-4">
          <button class="px-6 py-3 font-sans btn-dark">Book a free call</button>
          <button class="px-6 py-3 font-sans btn-light">View project</button>
        </div>
        <div class="flex flex-col items-start justify-start w-3/6 gap-4 mt-32">
          <div class="">
            <h2 class="text-h2">Follow me on :</h2>
          </div>
          <div class="flex gap-2">
            <div v-for="midia in socialMedias">
              <button
                class="flex items-center justify-center w-10 h-10 text-xl btn-dark"
              >
                <a :href="midia.link">
                  <font-awesome-icon :icon="['fab', midia.icon]" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <img
          src="../../../assets/image_home_block_1.jpg"
          class="h-[1000px] w-full"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { fetchSocialMedia } from "../../../fechData";

const socialMedias = ref([]);

onMounted(async () => {
  checkFetchData();
});

const checkFetchData = async () => {
  socialMedias.value = await fetchSocialMedia();
  console.log(socialMedias);
};
</script>
<style scoped>
.style-landingPage {
  @apply bg-gray-100 border-b border-gray-300;
}
.btn-dark {
  @apply bg-gray-900 border border-gray-900 rounded-full text-gray-50 hover:bg-gray-50 hover:text-gray-900;
}
.btn-light {
  @apply text-gray-900 border border-gray-900 bg-gray-50 rounded-full hover:bg-gray-900 hover:text-gray-50;
}
.text-h1 {
  @apply font-sans text-5xl font-bold text-gray-800;
}
.text-h2 {
  @apply font-sans font-semibold text-base text-gray-800;
}
.text-p {
  @apply font-sans text-base  text-gray-500;
}
</style>
