import { useAntdvStore } from '@/store/antdv';
import { fun } from './fun';

export const showModal = (anyString: string) => {
  useAntdvStore().modal.confirm({
    title: '提示',
    content: '你确定要操作么？',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      console.log(111);
      return fun(anyString).then((res) => console.log(res));
    },
  });
};
