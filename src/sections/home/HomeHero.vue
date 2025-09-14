<script setup lang="ts">
import Aurora from '@/components/bits/Aurora/Aurora.vue'
import BlurText from '@/components/bits/BlurText/BlurText.vue'
import ShinyText from '@/components/bits/ShinyText/ShinyText.vue'
import ProfileCard from '@/components/bits/ProfileCard/ProfileCard.vue'
import avatarUrl from '@/assets/images/avatarProfileCard.png'
import iconUrl from '@/assets/logos/mLogo.png'

const handleAnimationComplete = () => {
  console.log('All animations complete!')
}

const handleContactClick = () => {
  console.log('Contact button clicked!')
}
</script>

<template>
  <!-- Aurora: absolut über die volle Fläche, hinter allem -->
  <Aurora
    class="absolute inset-0 -z-10"
    :color-stops="['#171D22', '#7cff67', '#171D22']"
    :amplitude="1.0"
    :blend="0.5"
    :speed="1.0"
    :intensity="1.0"
  />

  <!-- Fullscreen-Hero mit Aurora als globalem Hintergrund -->
  <section class="relative overflow-hidden">
    <!-- Inhalt: zentrierter Container -->
    <div class="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <!-- Zweispaltiges Layout (mobil 1 Spalte) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="text-white text-center md:text-left">
          <ShinyText
            text="Exceptional Development for Modern Solutions"
            :disabled="false"
            :speed="3"
            class-name="hero-shiny"
          />

          <BlurText
            text="As a Full-Stack Software Developer with a Business Informatics background, I specialize in creating user-centric applications that prioritize quality and accessibility. My commitment to responsive design ensures that every project delivers an exceptional experience across all devices."
            :delay="200"
            class="hero-blur mx-auto md:mx-0"
            animate-by="words"
            direction="top"
            :threshold="0.1"
            root-margin="0px"
            :step-duration="0.35"
            @animation-complete="handleAnimationComplete"
          />

          <div class="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              class="px-5 py-3 rounded-xl bg-white tex∏t-black"
              style="color: black !important"
              >Explore</a
            >

            <!--<StarBorder as="button" color="Green" speed="6s" thickness="3"> Explore </StarBorder>
            <StarBorder as="button" color="Green" speed="6s" thickness="3"> Contact </StarBorder>-->
            <a href="#contact" class="px-5 py-3 rounded-xl border border-white">Contact</a>
          </div>
        </div>

        <!-- Rechte Spalte: ProfileCard -->
        <div class="flex justify-center md:justify-end scale-80">
          <ProfileCard
            name="Minela Mašinović"
            title="Software Developer"
            :avatar-url="avatarUrl"
            :icon-url="iconUrl"
            grain-url="/assets/grain.webp"
            :show-user-info="false"
            :show-behind-gradient="true"
            :enable-tilt="true"
            @contact-click="handleContactClick"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-shiny {
  font-weight: 700;
  color: white;
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.hero-blur {
  font-weight: 400;
  line-height: 1.6;
  font-size: clamp(0.95rem, 1.8vw, 1.125rem);
  max-width: 42rem;
  margin-top: 1rem;
}
</style>
