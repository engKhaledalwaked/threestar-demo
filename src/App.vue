<script setup>
import { t } from './i18n'
import { site, wa } from './site'
import SiteNav from './components/SiteNav.vue'
import HeroWall from './components/HeroWall.vue'
import ExpressSection from './components/ExpressSection.vue'
import SessionsSection from './components/SessionsSection.vue'
import StudioSection from './components/StudioSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import BookSection from './components/BookSection.vue'
import VisitSection from './components/VisitSection.vue'
import StarMark from './components/StarMark.vue'
const year = new Date().getFullYear()
</script>

<template>
  <!-- نسخة عرض: احذف هذا الشريط عند الإطلاق الرسمي -->
  <div class="demo-ribbon">{{ t.ribbon }}</div>
  <SiteNav />
  <main>
    <HeroWall />
    <ExpressSection />
    <SessionsSection />
    <StudioSection />
    <ReviewsSection />
    <BookSection />
    <VisitSection />
  </main>
  <footer class="footer">
    <div class="container foot">
      <StarMark :size="64" />
      <b class="foot-en">{{ t.brandEn }}</b>
      <span class="foot-ar">{{ t.brandAr }}</span>
      <p>{{ t.footer.tag }}</p>
      <a :href="`tel:${site.phone.tel}`" dir="ltr" class="foot-phone">{{ site.phone.label }}</a>
      <small>© {{ year }} {{ t.footer.rights }} · <span class="demo">{{ t.footer.demo }}</span></small>
    </div>
  </footer>
  <div class="sticky">
    <a :href="`tel:${site.phone.tel}`">{{ t.sticky.call }}</a>
    <a :href="wa(t.book.msg.hello)" target="_blank" rel="noopener" class="main">{{ t.sticky.book }}</a>
  </div>
</template>
