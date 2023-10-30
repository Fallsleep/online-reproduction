import { createRouter, createWebHistory } from 'vue-router';
import BlankLayout from '../components/Layout/BlankLayout.vue';
import Home from '../components/Home.vue';
import ModalTheme from '../components/ModalTheme.vue';
import ApiTest from '../components/ApiTest.vue';

const routes = [
  {
    path: '/',
    component: () => BlankLayout,
    redirect: {
      path: 'ApiTest',
    },
    children: [
      { path: '/Home', component: () => Home },
      { path: '/ModalTheme', component: () => ModalTheme },
      { path: '/ApiTest', component: () => ApiTest },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
