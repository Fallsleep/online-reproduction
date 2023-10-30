import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import { pinaRouterPlugin, pinia } from './store';

// 只有开发模式才导入数据模拟初始化脚本，
// 如果直接导入，build 时会将数据模拟代码打包到 vendor.js中
if (import.meta.env.DEV) {
  await import('./mock');
}

const app = createApp(App);
app.use(pinia.use(pinaRouterPlugin(router)));
app.use(router);
app.mount('#app');
