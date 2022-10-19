import { createApp } from 'vue';
import { App } from './App';
import router from './router';
import '@svgstore'; // 引入所有 icons，存于一个 svg sprite 中

const app = createApp(App);

app.use(router);

app.mount('#app');
