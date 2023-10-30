import { fun } from '../fun';
import { showModal } from '../showModal';
import { pinaRouterPlugin } from '@/store';
import App from '@/App.vue';
import { setWrapper } from '@/__test__/utils';

describe('对话框组件测试', () => {
  vi.mock('../fun');
  beforeEach(() => {
    setWrapper(
      testMount(App, {
        global: {
          plugins: [
            // 和 @testing-library/vue 不同，不需要将 router 作为插件传递
            createTestingPinia({
              // 由于 vue-router-mock 是在 vitest.setup.js的 beforeEach 中注入的 router 对象，
              // 必须在 beforeEach 或 it/test 中调用 getRouter 获取router，否则是 undefined。
              plugins: [pinaRouterPlugin(getRouter())],
            }),
          ],
        },
        attachTo: document.body,
      })
    );
  });

  it('显示对话框，快照测试', async () => {
    // 弹出对话框，除非是在 beforeEach 中调用，此处必须用 await ，否则后续将无法获取到组件
    await showModal();
    // 是否显示了对话框
    const message = testScreen.getByText('你确定要操作么？');
    // 显示对话框
    expect(message).toBeTruthy();
    // 快照
    expect(document.body).toMatchSnapshot();
  });

  it('点击确定按钮，调用 fun 方法', async () => {
    // 弹出对话框，除非是在 beforeEach 中调用，此处必须用 await ，否则后续将无法获取到组件
    await showModal('any string');
    const user = userEvent.setup();
    // 点击确定按钮
    // 1. 按钮中文见会加空格
    // 2. 目前文字父节点为 span ，而非注册了点击事件的 button
    await user.click(
      testScreen.getByRole('button', {
        name: /确 定/i,
        hidden: true,
      })
    );
    // 调用了 fun 方法
    expect(fun).toHaveBeenCalledOnce();
    expect(fun).toHaveBeenCalledWith('any string');
  });
});
