<script setup lang="ts">
import TiltedCard from '@/components/bits/TiltedCard/TiltedCard.vue'
</script>

<template>
  <section class="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <div class="cards-wrapper flex flex-wrap justify-center gap-6">
        <TiltedCard
          image-src="https://example.com/image.jpg"
          alt-text="Sample image"
          caption-text="Hover to see tooltip"
          container-height="400px"
          container-width="400px"
          image-height="300px"
          image-width="300px"
          :rotate-amplitude="14"
          :scale-on-hover="1.1"
          :show-mobile-warning="true"
          :show-tooltip="true"
          :display-overlay-content="false"
        >
          <template #overlay>
            <div class="overlay-content">Your overlay content here</div>
          </template>
        </TiltedCard>

        <TiltedCard
          image-src="https://example.com/image.jpg"
          alt-text="Sample image"
          caption-text="Hover to see tooltip"
          container-height="400px"
          container-width="400px"
          image-height="300px"
          image-width="300px"
          :rotate-amplitude="14"
          :scale-on-hover="1.1"
          :show-mobile-warning="true"
          :show-tooltip="true"
          :display-overlay-content="false"
        >
          <template #overlay>
            <div class="overlay-content">Your overlay content here</div>
          </template>
        </TiltedCard>

        <TiltedCard
          image-src="https://example.com/image.jpg"
          alt-text="Sample image"
          caption-text="Hover to see tooltip"
          container-height="400px"
          container-width="400px"
          image-height="300px"
          image-width="300px"
          :rotate-amplitude="14"
          :scale-on-hover="1.1"
          :show-mobile-warning="true"
          :show-tooltip="true"
          :display-overlay-content="false"
        >
          <template #overlay>
            <div class="overlay-content">Your overlay content here</div>
          </template>
        </TiltedCard>

        <TiltedCard
          image-src="https://example.com/image.jpg"
          alt-text="Sample image"
          caption-text="Hover to see tooltip"
          container-height="400px"
          container-width="400px"
          image-height="300px"
          image-width="300px"
          :rotate-amplitude="14"
          :scale-on-hover="1.1"
          :show-mobile-warning="true"
          :show-tooltip="true"
          :display-overlay-content="false"
        >
          <template #overlay>
            <div class="overlay-content">Your overlay content here</div>
          </template>
        </TiltedCard>

        <TiltedCard
          image-src="https://example.com/image.jpg"
          alt-text="Sample image"
          caption-text="Hover to see tooltip"
          container-height="400px"
          container-width="400px"
          image-height="300px"
          image-width="300px"
          :rotate-amplitude="14"
          :scale-on-hover="1.1"
          :show-mobile-warning="true"
          :show-tooltip="true"
          :display-overlay-content="false"
        >
          <template #overlay>
            <div class="overlay-content">Your overlay content here</div>
          </template>
        </TiltedCard>

        <TiltedCard
          image-src="https://example.com/image.jpg"
          alt-text="Sample image"
          caption-text="Hover to see tooltip"
          container-height="400px"
          container-width="400px"
          image-height="300px"
          image-width="300px"
          :rotate-amplitude="14"
          :scale-on-hover="1.1"
          :show-mobile-warning="true"
          :show-tooltip="true"
          :display-overlay-content="false"
        >
          <template #overlay>
            <div class="overlay-content">Your overlay content here</div>
          </template>
        </TiltedCard>

        <TiltedCard
          image-src="https://example.com/image.jpg"
          alt-text="Sample image"
          caption-text="Hover to see tooltip"
          container-height="400px"
          container-width="400px"
          image-height="300px"
          image-width="300px"
          :rotate-amplitude="14"
          :scale-on-hover="1.1"
          :show-mobile-warning="true"
          :show-tooltip="true"
          :display-overlay-content="false"
        >
          <template #overlay>
            <div class="overlay-content">Your overlay content here</div>
          </template>
        </TiltedCard>

        <TiltedCard
          image-src="https://example.com/image.jpg"
          alt-text="Sample image"
          caption-text="Hover to see tooltip"
          container-height="400px"
          container-width="400px"
          image-height="300px"
          image-width="300px"
          :rotate-amplitude="14"
          :scale-on-hover="1.1"
          :show-mobile-warning="true"
          :show-tooltip="true"
          :display-overlay-content="false"
        >
          <template #overlay>
            <div class="overlay-content">Your overlay content here</div>
          </template>
        </TiltedCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
