<script setup>
import { t } from '../i18n'
import { wa } from '../site'
</script>

<template>
  <section class="section express" id="express">
    <div class="container">
      <div class="head light" v-reveal>
        <p class="eyebrow">{{ t.express.kicker }}</p>
        <h2>{{ t.express.title }}</h2>
        <p class="sub">{{ t.express.sub }}</p>
      </div>
      <div class="sizes">
        <article v-for="it in t.express.items" :key="it.t" class="size" v-reveal>
          <div class="print">
            <div class="paper" :style="{ width: it.w * 14 + 'px', height: it.h * 14 + 'px' }">
              <svg viewBox="0 0 40 50" preserveAspectRatio="xMidYMax meet" aria-hidden="true"><circle cx="20" cy="19" r="9" /><path d="M4 50c1-11 8-17 16-17s15 6 16 17z" /></svg>
            </div>
            <span class="dim">{{ it.s }}</span>
          </div>
          <h3>{{ it.t }}</h3>
          <p>{{ it.d }}</p>
        </article>
      </div>
      <ol class="steps">
        <li v-for="s in t.express.steps" :key="s.n" v-reveal>
          <span class="num">{{ s.n }}</span>
          <div><h3>{{ s.t }}</h3><p>{{ s.d }}</p></div>
        </li>
      </ol>
      <div class="express-cta" v-reveal>
        <a class="btn btn-gold" :href="wa(t.express.ask)" target="_blank" rel="noopener">{{ t.express.cta }}</a>
      </div>
    </div>
  </section>
</template>
