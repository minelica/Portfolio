<script setup lang="ts">
import DarkVeil from '@/components/bits/DarkVeil/DarkVeil.vue'
import ShinyText from '@/components/bits/ShinyText/ShinyText.vue'
import Folder from '@/components/bits/Folder/Folder.vue'
import TiltedCard from '@/components/bits/TiltedCard/TiltedCard.vue'

import z1 from '@/assets/images/z1.png'
import z2 from '@/assets/images/z2.png'
import z3 from '@/assets/images/z3.jpg'
import z4 from '@/assets/images/z4.jpg'
import z5 from '@/assets/images/z5.jpg'
import z6 from '@/assets/images/z6.jpg'
import z7 from '@/assets/images/z7.jpg'
import z8 from '@/assets/images/z8.jpg'

const items = ['Learn', 'Grow', 'Build']
</script>

<template>
  <div class="relative isolate w-full min-h-screen overflow-hidden bg-transparent">
    <!-- Hintergrund -->
    <DarkVeil
      class="absolute inset-0 -z-10"
      :hue-shift="32"
      :noise-intensity="0.15"
      :scanline-intensity="0.0"
      :speed="1.6"
      :scanline-frequency="1"
      :warp-amount="0.1"
      :resolution-scale="1"
    />

    <!-- HERO -->
    <section class="relative z-10">
      <div class="mx-auto max-w-6xl px-6 py-10 sm:py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <!-- Text -->
          <div
            class="flex flex-col justify-center h-full text-white text-center md:text-left mt-15 mb-"
          >
            <ShinyText
              text="I believe that technology never stands still — and neither do I"
              :disabled="false"
              :speed="3"
              class-name="hero-shiny"
            />
            <p class="hero-paragraph mt-5 mb-10">
              I enjoy continuously developing my skills, exploring new tools, and challenging myself
              to grow with every project.
            </p>
          </div>

          <!-- Folder -->
          <div class="flex justify-center md:justify-end items-center h-full md:mr-5">
            <div class="scale-95 sm:scale-100 md:scale-105 lg:scale-110 origin-center">
              <Folder :items="items" :size="1.5" color="#315ec1" class="folder">
                <!-- links -->
                <template #item-1="{ item }">
                  <div class="paper-slot paper-left">
                    <span class="paper-text">{{ item }}</span>
                  </div>
                </template>

                <!-- mittig -->
                <template #item-2="{ item }">
                  <div class="paper-slot paper-right">
                    <span class="paper-text">{{ item }}</span>
                  </div>
                </template>

                <!-- rechts -->
                <template #item-3="{ item }">
                  <div class="paper-slot-center paper-center">
                    <span class="paper-text">{{ item }}</span>
                  </div>
                </template>
              </Folder>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CARDS -->
    <section class="relative z-10 w-full">
      <div class="relative mx-auto max-w-6xl px-6 pb-12 sm:pb-14 md:pb-16">
        <div class="cards-wrapper flex flex-wrap justify-center md:justify-evenly gap-5 sm:gap-6">
          <!-- Normale Karten -->
          <div
            v-for="(img, index) in [z1, z2, z3, z4, z5, z6]"
            :key="index"
            class="w-full sm:w-[48%] max-w-[450px] flex-grow"
          >
            <TiltedCard
              :image-src="img"
              alt-text="Sample image"
              caption-text=""
              container-width="min(100%, 450px)"
              :container-height="'clamp(260px, 60vw, 340px)'"
              image-width="min(100%, 450px)"
              :image-height="'clamp(240px, 58vw, 320px)'"
              :rotate-amplitude="14"
              :scale-on-hover="1.05"
              :show-mobile-warning="false"
              :show-tooltip="false"
              :display-overlay-content="false"
            />
          </div>

          <!-- Letzte 2 Karten (extra hoch) -->
          <div
            v-for="(img, i) in [z7, z8]"
            :key="'last-' + i"
            class="w-full sm:w-[48%] max-w-[400px] flex-grow"
          >
            <TiltedCard
              :image-src="img"
              alt-text="Sample image"
              caption-text=""
              container-width="min(100%, 400px)"
              container-height="clamp(400px, 85vw, 500px)"
              image-width="min(100%, 400px)"
              image-height="clamp(380px, 80vw, 480px)"
              :rotate-amplitude="14"
              :scale-on-hover="1.05"
              :show-mobile-warning="false"
              :show-tooltip="false"
              :display-overlay-content="false"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-shiny {
  font-weight: 700;
  color: white;
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  .hero-shiny {
    width: 150%;
  }
}

.hero-paragraph {
  font-weight: 400;
  line-height: 1.6;
  font-size: clamp(0.95rem, 1.8vw, 1.125rem);
  max-width: 42rem;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.8);
}

.cards-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.folder {
  color: black;
}

@media (max-width: 640px) {
  .cards-wrapper :deep(.tilted-card) {
    min-height: 420px !important;
  }
  .cards-wrapper :deep(.tilted-card img) {
    min-height: 400px !important;
  }
}

.paper-slot {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end; /* vertikal */
  padding: 6px 10px; /* Abstand für Lesbarkeit */
  overflow: hidden;
}

.paper-slot-center {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /* vertikal mittig */
  padding: 6px 10px; /* Abstand für Lesbarkeit */
  overflow: hidden;
}

.paper-left {
  justify-content: flex-start;
  text-align: left;
}

.paper-center {
  justify-content: center;
  text-align: center;
}

.paper-right {
  justify-content: flex-end;
  text-align: right;
}

.paper-text {
  color: #315ec1; /* dein Blau */
  font-weight: 400; /* kein Fett – besser lesbar */
  font-size: clamp(0.8rem, 1.6vw, 1rem); /* responsiv */
  line-height: 1.2;
  letter-spacing: 0.3px;
  white-space: nowrap;
  opacity: 0.9; /* leicht transparent – elegant */
}
</style>
