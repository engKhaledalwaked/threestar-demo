<script setup>
defineProps({ size: { type: Number, default: 64 } })
</script>

<template>
  <!-- شعار الاستوديو: ثلاث نجوم وقوس، كما على جدار الاستوديو -->
  <svg class="starmark" :width="size" :height="size * 0.62" viewBox="0 0 120 74" aria-hidden="true">
    <g class="stars">
      <path d="M60 4l5.6 11.4 12.6 1.8-9.1 8.9 2.1 12.5L60 32.7l-11.2 5.9 2.1-12.5-9.1-8.9 12.6-1.8z" />
      <path d="M24 17l4.3 8.7 9.6 1.4-7 6.8 1.7 9.6L24 39l-8.6 4.5 1.7-9.6-7-6.8 9.6-1.4z" />
      <path d="M96 17l4.3 8.7 9.6 1.4-7 6.8 1.7 9.6L96 39l-8.6 4.5 1.7-9.6-7-6.8 9.6-1.4z" />
    </g>
    <path class="arc" d="M14 64 Q60 40 106 64" />
  </svg>
</template>
