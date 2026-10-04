<script setup>
import { t } from '../i18n'
import { site, img, wa } from '../site'
import StarMark from './StarMark.vue'

// نفس ترتيب جدار الصور في الاستوديو
const frames = [
  { k: 'a', src: 'portfolio-family.jpg' },
  { k: 'b', src: 'portfolio-family-standing.jpg' },
  { k: 'c', src: 'portfolio-siblings.jpg' },
  { k: 'd', src: 'portfolio-mother-newborn.jpg' },
  { k: 'e', src: 'portfolio-newborn.jpg' },
]
</script>

<template>
  <section class="hero" id="top">
    <div class="spot" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div class="hero-copy">
        <StarMark :size="96" class="hero-mark" />
        <p class="eyebrow">{{ t.hero.kicker }}</p>
        <h1>
          <span>{{ t.hero.title1 }}</span>
          <span class="gold">{{ t.hero.title2 }}</span>
        </h1>
        <span class="rule" aria-hidden="true"></span>
        <p class="lead">{{ t.hero.lead }}</p>
        <div class="ctas">
          <a class="btn btn-dark" :href="wa(t.book.msg.hello)" target="_blank" rel="noopener">{{ t.hero.cta1 }}</a>
          <a class="btn btn-line" href="#express">{{ t.hero.cta2 }}</a>
        </div>
        <ul class="chips">
          <li v-for="c in t.hero.chips" :key="c">{{ c }}</li>
        </ul>
        <p class="rating"><b>{{ site.rating }}</b> <span class="stars">★★★★★</span> <small>{{ site.reviews }} {{ t.hero.reviews }}</small></p>
      </div>

      <div class="wall" aria-hidden="true">
        <figure v-for="(f, i) in frames" :key="f.k" class="frame" :class="'f-' + f.k" :style="{ '--d': i * 0.12 + 's' }">
          <div class="mat"><img :src="img(f.src)" alt="" /></div>
        </figure>
        <div class="shelf"></div>
      </div>
    </div>
  </section>
</template>
