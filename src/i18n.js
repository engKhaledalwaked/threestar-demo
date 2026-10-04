import { ref, computed, watchEffect } from 'vue'

const saved = (() => { try { return localStorage.getItem('tss-lang') } catch { return null } })()
export const lang = ref(saved === 'en' ? 'en' : 'ar')
watchEffect(() => {
  document.documentElement.lang = lang.value
  document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr'
  try { localStorage.setItem('tss-lang', lang.value) } catch {}
})
export const toggleLang = () => { lang.value = lang.value === 'ar' ? 'en' : 'ar' }

const dict = {
  ar: {
    ribbon: 'نسخة عرض تجريبية — مُعدّة لاستوديو تري ستار',
    brandAr: 'استوديو تري ستار',
    brandEn: 'THREE STAR STUDIO',
    nav: { express: 'صور رسمية', sessions: 'الجلسات', studio: 'الاستوديو', reviews: 'آراء العملاء', visit: 'زورونا', book: 'احجز' },
    hero: {
      kicker: 'استوديو تصوير · اليرموك، الرياض',
      title1: 'نلتقط اللحظة…',
      title2: 'ونصنع الذكرى',
      lead: 'صور جواز وتأشيرات جاهزة خلال دقائق مع نسخة رقمية على واتساب، وجلسات تصوير عائلية وللأطفال والمواليد في أجواء هادئة.',
      cta1: 'احجز عبر واتساب', cta2: 'صور الجواز والتأشيرة',
      chips: ['جاهزة خلال دقائق', 'نسخة رقمية على واتساب', 'طباعة وتأطير'],
      reviews: 'مراجعة على Google',
    },
    express: {
      kicker: 'صور رسمية',
      title: 'صور الجواز والتأشيرة… وأنت تنتظر',
      sub: 'أخبرنا بالدولة أو الجهة فقط، ونضبط المقاس ولون الخلفية حسب متطلباتها.',
      items: [
        { t: 'جواز السفر والهوية', s: '4 × 6 سم', w: 4, h: 6, d: 'خلفية بيضاء ومقاس معتمد للجوازات والهويات.' },
        { t: 'تأشيرة أمريكا', s: '5 × 5 سم', w: 5, h: 5, d: 'المقاس المربع (2×2 إنش) بالمواصفات المطلوبة.' },
        { t: 'شنغن وبريطانيا', s: '3.5 × 4.5 سم', w: 3.5, h: 4.5, d: 'المقاس الأوروبي لتأشيرات شنغن والمملكة المتحدة.' },
        { t: 'الإقامة والمعاملات', s: 'حسب الطلب', w: 4, h: 5, d: 'أي مقاس آخر تطلبه الجهة — نجهّزه لك.' },
      ],
      steps: [
        { n: '١', t: 'تصل ونجهّزك', d: 'نضبط الإضاءة والوقفة حسب متطلبات الجهة.' },
        { n: '٢', t: 'التصوير والمراجعة', d: 'تختار الصورة التي تعجبك قبل الطباعة.' },
        { n: '٣', t: 'مطبوعة + على واتساب', d: 'تستلم النسخ المطبوعة والنسخة الرقمية خلال دقائق.' },
      ],
      cta: 'اسأل عن مقاس دولة معيّنة',
      ask: 'مرحباً، أحتاج صوراً لتأشيرة/جواز. الدولة أو الجهة: ',
    },
    sessions: {
      kicker: 'جلسات التصوير',
      title: 'ذكريات تستحق أن تُعلّق على الجدار',
      sub: 'جلسات داخل الاستوديو بإضاءة احترافية، مع طباعة وتأطير الصور التي تختارها.',
      items: [
        { k: 'family', t: 'جلسات عائلية', d: 'صورة العائلة التي تبقى في صدر البيت.', img: 'portfolio-family.jpg' },
        { k: 'kids', t: 'الأطفال والإخوة', d: 'جلسات مرحة وصبورة تلتقط ضحكتهم الحقيقية.', img: 'portfolio-siblings.jpg' },
        { k: 'newborn', t: 'المواليد', d: 'أول صورة لطفلك، بهدوء وعناية.', img: 'portfolio-newborn.jpg' },
        { k: 'mother', t: 'الأم والطفل', d: 'لحظة لا تتكرر، بإضاءة ناعمة.', img: 'portfolio-mother-newborn.jpg' },
        { k: 'portrait', t: 'صور شخصية واحترافية', d: 'لملفك الوظيفي وحساباتك المهنية.', img: null },
      ],
      print: { t: 'طباعة وتأطير', d: 'نطبع صورك بأحجام مختلفة ونؤطّرها بإطارات جاهزة للتعليق.' },
      book: 'احجز هذه الجلسة',
    },
    studio: {
      kicker: 'الاستوديو',
      title: 'على شارع بحر العرب في اليرموك',
      p: 'استوديو قريب منك في حي اليرموك، بمساحة انتظار مريحة وفريق يعرف متطلبات الصور الرسمية لكل جهة. تعال مباشرة لصور الجواز، أو احجز موعداً لجلستك.',
      day: 'نهاراً', night: 'مساءً', inside: 'من الداخل',
    },
    reviews: {
      kicker: 'آراء العملاء',
      title: 'سرعة، ودقّة، وتعامل محترم',
      count: 'مراجعة على Google',
      note: 'مراجعات حقيقية من صفحة الاستوديو على خرائط Google (تُعرض بلغتها الأصلية).',
    },
    book: {
      kicker: 'الحجز',
      title: 'احجز موعدك خلال دقيقة',
      sub: 'املأ البيانات وسيفتح واتساب برسالة جاهزة للاستوديو.',
      name: 'الاسم', phone: 'رقم الجوال', service: 'الخدمة', people: 'عدد الأشخاص', date: 'اليوم المفضّل', slot: 'الفترة',
      slots: ['صباحاً (٨:٠٠ – ١:٣٠)', 'مساءً (٤:٠٠ – ١١:٣٠)'],
      services: ['صور جواز / هوية', 'صور تأشيرة', 'جلسة عائلية', 'جلسة أطفال', 'جلسة مواليد', 'صور شخصية / احترافية', 'طباعة وتأطير'],
      country: 'الدولة / الجهة (للتأشيرات)',
      note: 'ملاحظات',
      send: 'أرسل الطلب عبر واتساب',
      required: 'الرجاء كتابة الاسم ورقم الجوال.',
      msg: { hello: 'مرحباً استوديو تري ستار، أرغب بحجز موعد', name: 'الاسم', phone: 'الجوال', service: 'الخدمة', people: 'عدد الأشخاص', date: 'اليوم', slot: 'الفترة', country: 'الدولة/الجهة', note: 'ملاحظات' },
      walkin: 'صور الجواز والتأشيرة لا تحتاج حجزاً — تفضّل مباشرة خلال أوقات الدوام.',
    },
    visit: {
      kicker: 'زورونا',
      title: 'أوقات الدوام والموقع',
      addr: 'شارع بحر العرب، حي اليرموك، الرياض 13251',
      days: [
        { d: 'السبت – الأربعاء', h: '٨:٠٠ص – ١:٣٠م · ٤:٠٠ – ١١:٣٠م' },
        { d: 'الخميس', h: '٨:٠٠ص – ١:٣٠م · ٤:٠٠ – ١١:٠٠م' },
        { d: 'الجمعة', h: '٤:٠٠ – ١١:٠٠م' },
      ],
      note: 'السبت يبدأ الدوام ٨:٣٠ صباحاً.',
      dir: 'الاتجاهات', call: 'اتصال',
    },
    footer: { tag: 'نلتقط اللحظة… ونصنع الذكرى', rights: 'جميع الحقوق محفوظة', demo: 'نسخة عرض تجريبية' },
    sticky: { call: 'اتصال', book: 'احجز عبر واتساب' },
    close: 'إغلاق',
  },
  en: {
    ribbon: 'Demo preview — prepared for Three Star Studio',
    brandAr: 'استوديو تري ستار',
    brandEn: 'THREE STAR STUDIO',
    nav: { express: 'ID & Visa', sessions: 'Sessions', studio: 'Studio', reviews: 'Reviews', visit: 'Visit', book: 'Book' },
    hero: {
      kicker: 'Photo studio · Al Yarmouk, Riyadh',
      title1: 'Capturing moments,',
      title2: 'creating memories',
      lead: 'Passport and visa photos ready in minutes, with a digital copy on WhatsApp — plus calm, beautifully lit family, kids and newborn sessions.',
      cta1: 'Book on WhatsApp', cta2: 'Passport & visa photos',
      chips: ['Ready in minutes', 'Digital copy on WhatsApp', 'Printing & framing'],
      reviews: 'Google reviews',
    },
    express: {
      kicker: 'ID & visa photos',
      title: 'Passport & visa photos — while you wait',
      sub: 'Just tell us the country or authority; we match the exact size and background it requires.',
      items: [
        { t: 'Passport & ID', s: '4 × 6 cm', w: 4, h: 6, d: 'White background, approved size for passports and IDs.' },
        { t: 'US visa', s: '5 × 5 cm', w: 5, h: 5, d: 'The square 2×2 inch format, to spec.' },
        { t: 'Schengen & UK', s: '3.5 × 4.5 cm', w: 3.5, h: 4.5, d: 'European format for Schengen and UK visas.' },
        { t: 'Iqama & other forms', s: 'On request', w: 4, h: 5, d: 'Any other size your application needs.' },
      ],
      steps: [
        { n: '1', t: 'Walk in', d: 'We set the light and pose to the authority’s rules.' },
        { n: '2', t: 'Shoot & review', d: 'You pick the shot you like before printing.' },
        { n: '3', t: 'Printed + on WhatsApp', d: 'Prints and a digital copy, within minutes.' },
      ],
      cta: 'Ask about a specific country',
      ask: 'Hello, I need visa/passport photos. Country or authority: ',
    },
    sessions: {
      kicker: 'Photo sessions',
      title: 'Memories worth hanging on the wall',
      sub: 'In-studio sessions with professional lighting — plus printing and framing for the shots you love.',
      items: [
        { k: 'family', t: 'Family', d: 'The portrait that stays in the living room.', img: 'portfolio-family.jpg' },
        { k: 'kids', t: 'Kids & siblings', d: 'Playful, patient sessions that catch real smiles.', img: 'portfolio-siblings.jpg' },
        { k: 'newborn', t: 'Newborn', d: 'Your baby’s first portrait, with calm and care.', img: 'portfolio-newborn.jpg' },
        { k: 'mother', t: 'Mother & baby', d: 'A moment that never repeats, in soft light.', img: 'portfolio-mother-newborn.jpg' },
        { k: 'portrait', t: 'Personal & professional', d: 'For your CV and professional profiles.', img: null },
      ],
      print: { t: 'Printing & framing', d: 'Prints in many sizes, framed and ready to hang.' },
      book: 'Book this session',
    },
    studio: {
      kicker: 'The studio',
      title: 'On Bahr Al Arab St., Al Yarmouk',
      p: 'A neighbourhood studio in Al Yarmouk with a comfortable waiting area and a team that knows every authority’s photo rules. Walk in for passport photos, or book a slot for your session.',
      day: 'By day', night: 'By night', inside: 'Inside',
    },
    reviews: {
      kicker: 'Reviews',
      title: 'Fast, precise and respectful',
      count: 'Google reviews',
      note: 'Real reviews from the studio’s Google Maps page.',
    },
    book: {
      kicker: 'Booking',
      title: 'Book in a minute',
      sub: 'Fill in the details and WhatsApp opens with a ready message to the studio.',
      name: 'Name', phone: 'Mobile', service: 'Service', people: 'People', date: 'Preferred day', slot: 'Time',
      slots: ['Morning (8:00 – 1:30)', 'Evening (4:00 – 11:30)'],
      services: ['Passport / ID photos', 'Visa photos', 'Family session', 'Kids session', 'Newborn session', 'Personal / professional portrait', 'Printing & framing'],
      country: 'Country / authority (for visas)',
      note: 'Notes',
      send: 'Send request on WhatsApp',
      required: 'Please enter your name and mobile number.',
      msg: { hello: 'Hello Three Star Studio, I would like to book', name: 'Name', phone: 'Mobile', service: 'Service', people: 'People', date: 'Day', slot: 'Time', country: 'Country/authority', note: 'Notes' },
      walkin: 'Passport and visa photos need no booking — just walk in during opening hours.',
    },
    visit: {
      kicker: 'Visit',
      title: 'Hours & location',
      addr: 'Bahr Al Arab St., Al Yarmouk, Riyadh 13251',
      days: [
        { d: 'Saturday – Wednesday', h: '8:00 AM – 1:30 PM · 4:00 – 11:30 PM' },
        { d: 'Thursday', h: '8:00 AM – 1:30 PM · 4:00 – 11:00 PM' },
        { d: 'Friday', h: '4:00 – 11:00 PM' },
      ],
      note: 'Saturday opens at 8:30 AM.',
      dir: 'Directions', call: 'Call',
    },
    footer: { tag: 'Capturing moments, creating memories', rights: 'All rights reserved', demo: 'Demo preview' },
    sticky: { call: 'Call', book: 'Book on WhatsApp' },
    close: 'Close',
  },
}
export const t = computed(() => dict[lang.value])

// مراجعات حقيقية من خرائط Google (مقتطفات)
export const reviews = [
  { n: 'Muhammad Osama', q: 'I wanted to get some passport size photo for visa… it took only 5 mins to get everything done. I didn’t even have to ask but he also provided digital image on WhatsApp. Super quick and amazing.' },
  { n: 'GC GC', q: 'Amazing service! I did my photo for US and Schengen visa and got it in minutes. Safeer is a very good photographer and takes good care of his clients!' },
  { n: 'Cecilio Suarez', q: 'For me this is the best Photo Studio in Riyadh, they have a good attitude, respectful and nice service towards the customer. Great quality of image and super helpful.' },
]
