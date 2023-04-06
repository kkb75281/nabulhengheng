import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

let skapi = new Skapi('ap22aWRRyr4OBzCmodru', 'ad5cb248-44f8-4f82-8f4d-655167007594');

const app = createApp(App)

app.use(router)

app.mount('#app')

export { skapi };
