<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { t } from '../i18n'
import { img } from '../site'

const shots = [
  { src: 'storefront-night.jpg', k: 'night' },
  { src: 'interior.jpg', k: 'inside' },
  { src: 'storefront-day.jpg', k: 'day' },
  { src: 'brand-wall.jpg', k: 'wall' },
]
const open = ref(null)
const onKey = (e) => { if (e.key === 'Escape') open.value = null }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section class="section studio" id="studio">
    <div class="container studio-grid">
      <div class="studio-copy" v-reveal>
        <p class="eyebrow">{{ t.studio.kicker }}</p>
        <h2>{{ t.studio.title }}</h2>
        <p class="sub">{{ t.studio.p }}</p>
      </div>
      <div class="studio-photos">
        <button v-for="(s, i) in shots" :key="s.src" type="button" class="sp" :class="'sp-' + s.k" @click="open = i" v-reveal>
          <img :src="img(s.src)" alt="" loading="lazy" />
          <span v-if="t.studio[s.k]">{{ t.studio[s.k] }}</span>
        </button>
      </div>
    </div>
    <Transition name="fade">
      <div v-if="open !== null" class="lightbox" role="dialog" aria-modal="true" @click.self="open = null">
        <button type="button" class="lb-x" :aria-label="t.close" @click="open = null">✕</button>
        <img :src="img(shots[open].src)" alt="" />
      </div>
    </Transition>
  </section>
</template>
