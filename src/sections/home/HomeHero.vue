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
    :color-stops="['#0f172a', '#22c55e', '#8b5cf6', '#3b82f6']"
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
            :step-duration="0.3"
            @animation-complete="handleAnimationComplete"
          />

          <div class="mt-8 flex flex-wrap gap-6 justify-center md:justify-start text-white/90">
            <a href="/projects" class="contact-link" aria-label="Explore Projects"> 🚀 Explore </a>

            <a href="/contact" class="contact-link" aria-label="Contact Me"> 💬 Contact </a>
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

.contact-link {
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  color: #e2e8f0;
}

.contact-link:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: #bfdbfe;
  transform: translateY(-3px);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
}
</style>
