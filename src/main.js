import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

createApp(App).use(store).use(router).mount('#app')

window.onscroll = function() {rotate()};

function rotate() {
  if (document.documentElement.scrollTop > 1150) {
    document.getElementById("cardFC").classList.add("rotatedL");
    document.getElementById("cardBG").classList.add("rotatedD");
  }
  if (document.documentElement.scrollTop > 2350) {
    document.getElementById("cardJ1").classList.add("rotatedJ1");
    document.getElementById("cardJ2").classList.add("rotatedJ2");
  }
}
