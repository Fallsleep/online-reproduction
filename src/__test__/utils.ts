import { mount } from '@vue/test-utils';

let globalWrapper: ReturnType<typeof mount>;

/**
 * 临时保存 mount 返回的对象
 * @param wrapper mount 返回的对象
 */
export const setWrapper = (wrapper: ReturnType<typeof mount>) => {
  globalWrapper = wrapper;
};

/**
 * 获取 mount/testMount 返回的对象
 */
export const getWrapper = () => globalWrapper;

/**
 * 调用 mount/testMount 返回的对象的 unmount 方法
 */
export const cleanup = () => {
  if (globalWrapper) {
    globalWrapper.unmount();
    globalWrapper = null;
  }
};
