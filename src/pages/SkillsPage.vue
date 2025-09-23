<script setup lang="ts">
import SkillsHero from '@/sections/skills/SkillsHero.vue'
// import SkillsCards from '@/sections/skills/SkillsCards.vue'
</script>

<template>
  <div class="home-page">
    <SkillsHero />
    <!-- <SkillsCards /> -->
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
