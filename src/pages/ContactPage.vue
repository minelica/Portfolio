<script setup lang="ts">
import ContactHero from '@/sections/contact/ContactHero.vue'
// import ContactFeatures from '@/sections/contact/ContactFeatures.vue'
</script>

<template>
  <div class="home-page">
    <ContactHero />
    <!-- <ContactFeatures /> -->
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -20px;
}
</style>
