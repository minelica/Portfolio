<template>
  <div class="home-page">
    <HomeHero />
    <HomeFeatures />
    <HomeHow />
    <HomeLogoCloud />
    <HomeCTA />
  </div>
</template>

<script setup lang="ts">
import HomeHero from '@/sections/home/HomeHero.vue'
import HomeFeatures from '@/sections/home/HomeFeatures.vue'
import HomeHow from '@/sections/home/HomeHow.vue'
import HomeLogoCloud from '@/sections/home/HomeLogoCloud.vue'
import HomeCTA from '@/sections/home/HomeCTA.vue'
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
