import { showModal } from '../showModal';
import ModalTheme from '../ModalTheme.vue';
import { setWrapper } from '@/__test__/utils';

describe('对话框展示组件测试', () => {
  vi.mock('../showModal');
  beforeEach(() => {
    setWrapper(
      testMount(ModalTheme, {
        global: {
          plugins: [createTestingPinia()],
        },
        attachTo: document.body,
      })
    );
  });

  it('点击按钮，调用 showModal 方法', async () => {
    const user = userEvent.setup();
    await user.click(
      testScreen.getByRole('button', {
        name: /show Modal by shared function/i,
        hidden: true,
      })
    );
    // 调用了 showModal 方法
    expect(showModal).toHaveBeenCalledOnce();
  });
});
