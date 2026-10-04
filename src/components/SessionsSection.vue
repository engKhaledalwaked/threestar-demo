<script setup>
import { t } from '../i18n'
import { img, wa } from '../site'
</script>

<template>
  <section class="section sessions" id="sessions">
    <div class="container">
      <div class="head" v-reveal>
        <p class="eyebrow">{{ t.sessions.kicker }}</p>
        <h2>{{ t.sessions.title }}</h2>
        <p class="sub">{{ t.sessions.sub }}</p>
      </div>
      <div class="sess-grid">
        <article v-for="s in t.sessions.items" :key="s.k" class="sess" :class="['s-' + s.k, { text: !s.img }]" v-reveal>
          <div v-if="s.img" class="frame small"><div class="mat"><img :src="img(s.img)" :alt="s.t" loading="lazy" /></div></div>
          <div v-else class="mono" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect x="6" y="12" width="36" height="26" rx="4" /><circle cx="24" cy="25" r="7" /><path d="M17 12l3-5h8l3 5" /></svg>
          </div>
          <div class="sess-body">
            <h3>{{ s.t }}</h3>
            <p>{{ s.d }}</p>
            <a :href="wa(t.book.msg.hello + ' — ' + s.t)" target="_blank" rel="noopener" class="more">{{ t.sessions.book }}</a>
          </div>
        </article>
        <article class="sess text s-print" v-reveal>
          <div class="mono" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect x="8" y="6" width="32" height="36" rx="2" /><rect x="14" y="12" width="20" height="18" /><path d="M14 36h20" /></svg>
          </div>
          <div class="sess-body">
            <h3>{{ t.sessions.print.t }}</h3>
            <p>{{ t.sessions.print.d }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
