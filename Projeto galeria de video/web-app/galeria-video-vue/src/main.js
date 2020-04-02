import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/home/Home.vue';
import ManterGaleria from './components/galeria/ManterGaleria.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'home',
    path: '/Home',
    component: Home
  },

  {
    name: 'galeria',
    path: '/ManterGaleria',
    component: ManterGaleria
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
