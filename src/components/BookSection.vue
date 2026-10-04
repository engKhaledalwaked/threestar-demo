<script setup>
import { reactive, ref } from 'vue'
import { t } from '../i18n'
import { wa } from '../site'

const today = new Date().toISOString().slice(0, 10)
const f = reactive({ name: '', phone: '', service: 0, people: 1, date: '', slot: -1, country: '', note: '' })
const err = ref('')
const send = () => {
  if (!f.name.trim() || !f.phone.trim()) { err.value = t.value.book.required; return }
  err.value = ''
  const b = t.value.book, m = b.msg
  const lines = [
    m.hello,
    `${m.name}: ${f.name.trim()}`,
    `${m.phone}: ${f.phone.trim()}`,
    `${m.service}: ${b.services[f.service]}`,
    `${m.people}: ${f.people}`,
    f.date ? `${m.date}: ${f.date}` : null,
    f.slot >= 0 ? `${m.slot}: ${b.slots[f.slot]}` : null,
    f.service === 1 && f.country.trim() ? `${m.country}: ${f.country.trim()}` : null,
    f.note.trim() ? `${m.note}: ${f.note.trim()}` : null,
  ].filter(Boolean)
  window.open(wa(lines.join('\n')), '_blank', 'noopener')
}
</script>

<template>
  <section class="section book" id="book">
    <div class="container book-grid">
      <div class="book-copy" v-reveal>
        <p class="eyebrow">{{ t.book.kicker }}</p>
        <h2>{{ t.book.title }}</h2>
        <p class="sub">{{ t.book.sub }}</p>
        <p class="walkin">{{ t.book.walkin }}</p>
      </div>
      <form class="card-form" novalidate @submit.prevent="send" v-reveal>
        <div class="row">
          <label><span>{{ t.book.name }}</span><input v-model="f.name" autocomplete="name" /></label>
          <label><span>{{ t.book.phone }}</span><input v-model="f.phone" type="tel" dir="ltr" autocomplete="tel" /></label>
        </div>
        <div class="row">
          <label><span>{{ t.book.service }}</span>
            <select v-model.number="f.service"><option v-for="(s, i) in t.book.services" :key="s" :value="i">{{ s }}</option></select>
          </label>
          <label><span>{{ t.book.people }}</span><input v-model.number="f.people" type="number" min="1" max="20" /></label>
        </div>
        <label v-if="f.service === 1"><span>{{ t.book.country }}</span><input v-model="f.country" /></label>
        <div class="row">
          <label><span>{{ t.book.date }}</span><input v-model="f.date" type="date" :min="today" /></label>
          <div class="lbl"><span>{{ t.book.slot }}</span>
            <div class="seg"><button v-for="(s, i) in t.book.slots" :key="s" type="button" :class="{ on: f.slot === i }" @click="f.slot = f.slot === i ? -1 : i">{{ s }}</button></div>
          </div>
        </div>
        <label><span>{{ t.book.note }}</span><textarea v-model="f.note" rows="3"></textarea></label>
        <p v-if="err" class="err" role="alert">{{ err }}</p>
        <button class="btn btn-dark block" type="submit">{{ t.book.send }}</button>
      </form>
    </div>
  </section>
</template>
