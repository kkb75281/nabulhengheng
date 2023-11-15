import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const skapi = new Skapi("ap22vfR3eDOllHnVgi5D", "bf305ace-03b5-4f9d-b88f-291458748ca3");

const app = createApp(App)

app.use(router)

app.mount('#app')

export { skapi };
