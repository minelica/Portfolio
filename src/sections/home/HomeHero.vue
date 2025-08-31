<script setup lang="ts">
import Aurora from '@/components/bits/Aurora/Aurora.vue'
import BlurText from '@/components/bits/BlurText/BlurText.vue'
import ShinyText from '@/components/bits/ShinyText/ShinyText.vue'

const handleAnimationComplete = () => {
  console.log('All animations complete!')
}
</script>

<template>
  <section class="hero-container">
    <!-- Aurora Hintergrund -->
    <Aurora
      :color-stops="['#171D22', '#7cff67', '#171D22']"
      :amplitude="1.0"
      :blend="0.5"
      :speed="1.0"
      :intensity="1.0"
    />

    <!-- Inhalt über Aurora -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
    >
      <ShinyText
        text="Empowering Solutions Through Innovative Software Development"
        :disabled="false"
        :speed="3"
        class-name="hero-shiny"
      />
      <BlurText
        text="As a Full-Stack Software Developer with a Business Informatics background, I specialize in creating user-centric applications that prioritize quality and accessibility. My commitment to responsive design ensures that every project delivers an exceptional experience across all devices."
        :delay="200"
        class="hero-blur"
        animate-by="words"
        direction="top"
        :threshold="0.1"
        root-margin="0px"
        :step-duration="0.35"
        @animation-complete="handleAnimationComplete"
      />
      <!--      <p class="mt-4 max-w-2xl">
        As a Full-Stack Software Developer with a Business Informatics background…
      </p> -->
      <div class="mt-6 flex gap-4">
        <a href="#projects" class="px-5 py-3 rounded-xl bg-white text-black">Explore</a>
        <a href="#contact" class="px-5 py-3 rounded-xl border border-white">Contact</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  min-height: 60vh; /* mobil */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-shiny {
  font-size: 2rem;
  font-weight: 700;
}

.hero-blur {
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.5;
  max-width: 40rem; /* ca. 640px */
  margin-top: 1rem;
}
</style>
