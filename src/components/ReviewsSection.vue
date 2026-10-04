<script setup>
import { t, reviews } from '../i18n'
import { site } from '../site'
import StarMark from './StarMark.vue'
</script>

<template>
  <section class="section reviews" id="reviews">
    <div class="container">
      <div class="rev-top" v-reveal>
        <div>
          <p class="eyebrow">{{ t.reviews.kicker }}</p>
          <h2>{{ t.reviews.title }}</h2>
        </div>
        <div class="score">
          <StarMark :size="70" />
          <b>{{ site.rating }}</b>
          <small>{{ site.reviews }} {{ t.reviews.count }}</small>
        </div>
      </div>
      <div class="rev-grid">
        <blockquote v-for="r in reviews" :key="r.n" class="rev" dir="ltr" v-reveal>
          <span class="q" aria-hidden="true">“</span>
          <p>{{ r.q }}</p>
          <footer><span class="stars">★★★★★</span><b>{{ r.n }}</b></footer>
        </blockquote>
      </div>
      <p class="rev-note">{{ t.reviews.note }}</p>
    </div>
  </section>
</template>
