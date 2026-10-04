// البيانات من صفحة الاستوديو على خرائط Google
export const site = {
  whatsapp: '966590119333',
  phone: { tel: '+966590119333', label: '059 011 9333' },
  rating: '4.5',
  reviews: '769',
  coords: { lat: 24.8085752, lng: 46.7917794 },
  maps: 'https://www.google.com/maps/search/?api=1&query=24.8085752,46.7917794',
  mapEmbed: 'https://www.google.com/maps?q=24.8085752,46.7917794&z=17&output=embed',
}
export const img = (p) => `/img/${p}`
export const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
