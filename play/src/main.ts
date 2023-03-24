import { createApp } from 'vue'
import App from './App.vue'
import WxIcon from '@wan-xiang/components/icon'
import "@wan-xiang/theme-chalk/src/index.scss"
const plugins = [
  WxIcon
];

const app = createApp(App)
plugins.forEach((plugin) => app.use(plugin))
app.mount('#app')
