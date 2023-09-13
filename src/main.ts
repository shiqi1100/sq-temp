import './assets/main.css'
import 'amfe-flexible'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
function add(a, b) {
  console.log('add', a, b)
}
add(1, 2)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
