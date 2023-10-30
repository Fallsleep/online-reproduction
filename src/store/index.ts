import type { PiniaPlugin } from 'pinia';
import type { Router } from 'vue-router';

export const pinia = createPinia();

export const pinaRouterPlugin = (router: Router): PiniaPlugin => {
  return ({ store }) => {
    store.router = markRaw(router);
  };
};
