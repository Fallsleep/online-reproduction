import { App } from 'ant-design-vue';

/**
 * 用于处理 Ant Design Vue 的一些全局或静态过程。该方法的调用，必须在组件的 setup 过程中，调用该方法的方法也是如此
 */
export const useAntdvStore = defineStore('antdv', {
  state: () => ({
    /**
     * 用于创建 message 全局提示
     */
    message: App.useApp().message,
    /**
     * 用于创建 modal 对话框
     */
    modal: App.useApp().modal,
    /**
     * 用于创建 notification 通知提醒框
     */
    notification: App.useApp().notification,
  }),
});
