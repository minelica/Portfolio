<script setup lang="ts">
import LightRays from '@/components/bits/LightRays/LightRays.vue'
import ShinyText from '@/components/bits/ShinyText/ShinyText.vue'
import BlurText from '@/components/bits/BlurText/BlurText.vue'
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

const items = ['Learn', 'Build', 'Grow']

const handleAnimationComplete = () => {
  console.log('All animations complete!')
}
</script>

<template>
  <!-- isolate = eigener Stacking-Context, damit -z-10 zuverlässig "hinten" ist -->
  <div class="relative isolate w-full min-h-[800px] overflow-hidden bg-transparent">
    <!-- Hintergrund-Layer (blockiert keine Interaktionen) -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <LightRays
        rays-origin="top-center"
        rays-color="#1e293b"
        :rays-speed="2.0"
        :light-spread="2.0"
        :ray-length="3.5"
        :follow-mouse="true"
        :mouse-influence="0.1"
        :noise-amount="0.1"
        :distortion="0.05"
        :fade-distance="2.0"
        class="h-full w-full"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <!-- Fullscreen-Hero mit LightRays als globalem Hintergrund -->
    <section class="relative z-10">
      <div class="mx-auto max-w-6xl px-6 py-12 md:py-16 mt-15">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <!-- Linke Spalte: beide Texte untereinander -->
          <div class="flex flex-col justify-center h-full">
            <div class="text-white text-center md:text-left">
              <ShinyText
                text="I believe that technology never stands still — and neither do I"
                :disabled="false"
                :speed="3"
                class-name="hero-shiny"
              />
            </div>
            <div class="mt-6">
              <BlurText
                text="I enjoy continuously developing my skills, exploring new tools, and challenging myself to grow with every project."
                :delay="200"
                class="hero-blur mx-auto text-center md:text-left"
                animate-by="words"
                direction="top"
                :threshold="0.1"
                root-margin="0px"
                :step-duration="0.3"
                @animation-complete="handleAnimationComplete"
              />
            </div>
          </div>
          <!-- Rechte Spalte: Folder vertikal und horizontal zentriert -->
          <div class="flex justify-end items-center h-full mr-5">
            <Folder :items="items" :size="1.5" color="#1e293b" class="folder">
              <template #item-1="{ item }">
                <div class="flex justify-start w-full">
                  <span style="color: black; width: 100%">{{ item }}</span>
                </div>
              </template>
              <template #item-2="{ item }">
                <div class="flex justify-center w-full">
                  <span style="color: black; width: 100%">{{ item }}</span>
                </div>
              </template>
              <template #item-3="{ item }">
                <div class="flex justify-end w-full">
                  <span style="color: black; width: 100%">{{ item }}</span>
                </div>
              </template>
            </Folder>
          </div>
        </div>
      </div>
    </section>

    <section class="relative z-10 w-full min-h-[400px] flex items-center justify-center">
      <div class="relative mx-auto max-w-6xl px-6 text-center">
        <div class="cards-wrapper flex flex-wrap justify-evenly gap-6 mb-30">
          <TiltedCard
            class="w-[48%] max-w-[450px] flex-grow"
            :image-src="z1"
            alt-text="Sample image"
            caption-text="Hover to see tooltip"
            container-height="400px"
            container-width="450px"
            image-height="350px"
            image-width="450px"
            :rotate-amplitude="14"
            :scale-on-hover="1.1"
            :show-mobile-warning="true"
            :show-tooltip="false"
            :display-overlay-content="false"
          >
            <template #overlay>
              <div class="overlay-content">Your overlay content here</div>
            </template>
          </TiltedCard>

          <TiltedCard
            class="w-[48%] max-w-[450px] flex-grow"
            :image-src="z2"
            alt-text="Sample image"
            caption-text="Hover to see tooltip"
            container-height="400px"
            container-width="450px"
            image-height="350px"
            image-width="450px"
            :rotate-amplitude="14"
            :scale-on-hover="1.1"
            :show-mobile-warning="true"
            :show-tooltip="false"
            :display-overlay-content="false"
          >
            <template #overlay>
              <div class="overlay-content">Your overlay content here</div>
            </template>
          </TiltedCard>

          <TiltedCard
            class="w-[48%] max-w-[450px] flex-grow"
            :image-src="z3"
            alt-text="Sample image"
            caption-text="Hover to see tooltip"
            container-height="400px"
            container-width="450px"
            image-height="350px"
            image-width="450px"
            :rotate-amplitude="14"
            :scale-on-hover="1.1"
            :show-mobile-warning="true"
            :show-tooltip="false"
            :display-overlay-content="false"
          >
            <template #overlay>
              <div class="overlay-content">Your overlay content here</div>
            </template>
          </TiltedCard>

          <TiltedCard
            class="w-[48%] max-w-[450px] flex-grow"
            :image-src="z4"
            alt-text="Sample image"
            caption-text="Hover to see tooltip"
            container-height="400px"
            container-width="450px"
            image-height="350px"
            image-width="450px"
            :rotate-amplitude="14"
            :scale-on-hover="1.1"
            :show-mobile-warning="true"
            :show-tooltip="false"
            :display-overlay-content="false"
          >
            <template #overlay>
              <div class="overlay-content">Your overlay content here</div>
            </template>
          </TiltedCard>

          <TiltedCard
            class="w-[48%] max-w-[450px] flex-grow"
            :image-src="z5"
            alt-text="Sample image"
            caption-text="Hover to see tooltip"
            container-height="400px"
            container-width="450px"
            image-height="350px"
            image-width="450px"
            :rotate-amplitude="14"
            :scale-on-hover="1.1"
            :show-mobile-warning="true"
            :show-tooltip="false"
            :display-overlay-content="false"
          >
            <template #overlay>
              <div class="overlay-content">Your overlay content here</div>
            </template>
          </TiltedCard>

          <TiltedCard
            class="w-[48%] max-w-[450px] flex-grow"
            :image-src="z6"
            alt-text="Sample image"
            caption-text="Hover to see tooltip"
            container-height="400px"
            container-width="450px"
            image-height="350px"
            image-width="450px"
            :rotate-amplitude="14"
            :scale-on-hover="1.1"
            :show-mobile-warning="true"
            :show-tooltip="false"
            :display-overlay-content="false"
          >
            <template #overlay>
              <div class="overlay-content">Your overlay content here</div>
            </template>
          </TiltedCard>

          <TiltedCard
            class="w-[48%] max-w-[400px] flex-grow"
            :image-src="z7"
            alt-text="Sample image"
            caption-text="Hover to see tooltip"
            container-height="400px"
            container-width="400px"
            image-height="450px"
            image-width="350px"
            :rotate-amplitude="14"
            :scale-on-hover="1.1"
            :show-mobile-warning="true"
            :show-tooltip="false"
            :display-overlay-content="false"
          >
            <template #overlay>
              <div class="overlay-content">Your overlay content here</div>
            </template>
          </TiltedCard>

          <TiltedCard
            class="w-[48%] max-w-[400px] flex-grow"
            :image-src="z8"
            alt-text="Sample image"
            caption-text="Hover to see tooltip"
            container-height="400px"
            container-width="400px"
            image-height="450px"
            image-width="350px"
            :rotate-amplitude="14"
            :scale-on-hover="1.1"
            :show-mobile-warning="true"
            :show-tooltip="false"
            :display-overlay-content="false"
          >
            <template #overlay>
              <div class="overlay-content">Your overlay content here</div>
            </template>
          </TiltedCard>
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
  width: 150%;
}

.hero-blur {
  font-weight: 400;
  line-height: 1.6;
  font-size: clamp(0.95rem, 1.8vw, 1.125rem);
  max-width: 42rem;
  margin-top: 1rem;
}

.cards-wrapper {
  max-width: 1100px;
}

.overlay-content {
  color: black;
}

.folder {
  color: black;
}
</style>
