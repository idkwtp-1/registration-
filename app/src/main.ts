import './scss/styles.scss';
import 'bootstrap';
// import './../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
