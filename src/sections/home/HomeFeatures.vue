<script setup lang="ts">
import Orb from '@/components/bits/Orb/Orb.vue'
import ShinyText from '@/components/bits/ShinyText/ShinyText.vue'
import AnimatedContent from '@/components/bits/AnimatedContent/AnimatedContent.vue'

const handleComplete = () => {
  console.log('Animation completed!')
}
</script>

<template>
  <section class="relative w-full h-[600px] flex items-center">
    <!-- Orb als Hintergrund: bekommt die Hover-Events -->
    <Orb
      class="absolute inset-0 z-0 pointer-events-auto"
      :hoverIntensity="0.5"
      :rotateOnHover="true"
      :hue="100"
      :forceHoverState="false"
    />

    <!-- Inhalt im Vordergrund: lässt Events durch -->
    <div
      class="relative z-10 mx-auto max-w-6xl px-6 text-center md:text-center pointer-events-none"
    >
      <ShinyText
        text="Empowering Solutions Through Innovative Software Development"
        :speed="3"
        class-name="hero-shiny"
      />

      <div class="mt-2 mb-8 text-center text-sm md:text-base font-light text-white">
        I prioritize high-quality, responsive, and accessible development. My approach ensures your
        project meets modern web standards.
      </div>
      <AnimatedContent
        :distance="100"
        direction="vertical"
        :reverse="false"
        :duration="0.8"
        ease="power3.out"
        :initial-opacity="0"
        :animate-opacity="true"
        :scale="1"
        :threshold="0.1"
        :delay="0"
        @complete="handleComplete"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div class="feature-card">
            <h2>Responsive Design</h2>
            <p>
              Experience seamless interaction across all devices with my responsive design
              strategies.
            </p>
          </div>
          <div class="feature-card">
            <h2>Accessible Solutions</h2>
            <p>
              I create inclusive applications that cater to all users, enhancing usability and
              reach.
            </p>
          </div>
        </div>
      </AnimatedContent>
    </div>
  </section>
</template>

<style scoped>
.hero-shiny {
  font-size: clamp(1.6rem, 4vw, 3rem);
  font-weight: 700;
}

.feature-card {
  border-left: 2px solid white;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  text-align: left;
}

h2 {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
