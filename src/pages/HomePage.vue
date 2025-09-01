<template>
  <div class="home-page">
    <HomeHero />
    <HomeFeatures />
    <HomeHow />
    <HomeLogoCloud />
    <HomeCTA />
  </div>

  <SplashCursor
    :SIM_RESOLUTION="128"
    :DYE_RESOLUTION="1440"
    :CAPTURE_RESOLUTION="512"
    :DENSITY_DISSIPATION="3.5"
    :VELOCITY_DISSIPATION="2"
    :PRESSURE="0.1"
    :PRESSURE_ITERATIONS="20"
    :CURL="3"
    :SPLAT_RADIUS="0.2"
    :SPLAT_FORCE="6000"
    :SHADING="true"
    :COLOR_UPDATE_SPEED="10"
    :BACK_COLOR="{ r: 0.5, g: 0, b: 0 }"
    :TRANSPARENT="true"
  />
</template>

<script setup lang="ts">
import HomeHero from '@/sections/home/HomeHero.vue'
import HomeFeatures from '@/sections/home/HomeFeatures.vue'
import HomeHow from '@/sections/home/HomeHow.vue'
import HomeLogoCloud from '@/sections/home/HomeLogoCloud.vue'
import HomeCTA from '@/sections/home/HomeCTA.vue'
import SplashCursor from '@/components/bits/SplashCursor/SplashCursor.vue'
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}
</style>
