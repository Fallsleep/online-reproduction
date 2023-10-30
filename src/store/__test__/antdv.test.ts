import App from '@/App.vue';
import { pinaRouterPlugin } from '..';
import { useAntdvStore } from '../antdv';
import { setWrapper } from '@/__test__/utils';

describe('AntdvStore 测试', () => {
  beforeEach(() => {
    setWrapper(
      testMount(App, {
        global: {
          // 和 @testing-library/vue 不同，不需要将 router 作为插件传递
          plugins: [
            // 由于 vue-router-mock 是在 vitest.setup.js的 beforeEach 中注入的 router 对象，
            // 必须在 beforeEach 或 it/test 中调用 getRouter 获取router，否则是 undefined。
            createPinia().use(pinaRouterPlugin(getRouter())),
          ],
        },
        attachTo: document.body,
      })
    );
  });

  it('初始化时属性正确', async () => {
    const antdv = useAntdvStore();

    expect(antdv.modal).not.toBeUndefined();
    expect(antdv.modal.confirm).not.toBeUndefined();
    expect(antdv.message).not.toBeUndefined();
    expect(antdv.message.info).not.toBeUndefined();
    expect(antdv.notification).not.toBeUndefined();
    expect(antdv.notification.info).not.toBeUndefined();
  });
});
