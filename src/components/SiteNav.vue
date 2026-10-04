<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { t, lang, toggleLang } from '../i18n'
import { wa } from '../site'
import StarMark from './StarMark.vue'

const scrolled = ref(false)
const open = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 30 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
const links = ['express', 'sessions', 'studio', 'reviews', 'visit']
</script>

<template>
  <header class="nav" :class="{ scrolled, open }">
    <div class="container nav-in">
      <a href="#top" class="brand" @click="open = false">
        <StarMark :size="46" />
        <span class="brand-txt">
          <b>{{ t.brandEn }}</b>
          <small>{{ t.brandAr }}</small>
        </span>
      </a>
      <nav class="links">
        <a v-for="l in links" :key="l" :href="`#${l}`">{{ t.nav[l] }}</a>
      </nav>
      <div class="acts">
        <button type="button" class="lang" @click="toggleLang">{{ lang === 'ar' ? 'EN' : 'ع' }}</button>
        <a href="#book" class="btn btn-gold btn-sm hide-sm">{{ t.nav.book }}</a>
        <button type="button" class="burger" :aria-expanded="open" aria-label="Menu" @click="open = !open"><i></i><i></i></button>
      </div>
    </div>
    <div v-if="open" class="drawer">
      <a v-for="l in links" :key="l" :href="`#${l}`" @click="open = false">{{ t.nav[l] }}</a>
      <a :href="wa(t.book.msg.hello)" target="_blank" rel="noopener" class="btn btn-gold" @click="open = false">{{ t.sticky.book }}</a>
    </div>
  </header>
</template>
