<script setup>
import { t } from '../i18n'
import { site } from '../site'
</script>

<template>
  <section class="section visit" id="visit">
    <div class="container visit-grid">
      <div class="hours" v-reveal>
        <p class="eyebrow">{{ t.visit.kicker }}</p>
        <h2>{{ t.visit.title }}</h2>
        <dl>
          <div v-for="d in t.visit.days" :key="d.d"><dt>{{ d.d }}</dt><dd>{{ d.h }}</dd></div>
        </dl>
        <p class="small">{{ t.visit.note }}</p>
        <address>{{ t.visit.addr }}</address>
        <div class="ctas">
          <a class="btn btn-dark" :href="site.maps" target="_blank" rel="noopener">{{ t.visit.dir }}</a>
          <a class="btn btn-line" :href="`tel:${site.phone.tel}`">{{ t.visit.call }} <span dir="ltr">{{ site.phone.label }}</span></a>
        </div>
      </div>
      <div class="map frame wide" v-reveal>
        <div class="mat"><iframe :src="site.mapEmbed" title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      </div>
    </div>
  </section>
</template>
