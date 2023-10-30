// 值为 true 时，如果是开发模式则开启数据模拟
// 值为 false 时，任意模式都不开启数据模拟
// 通过修改 mocked 值处理开发模式下是否需要启动数据模拟，而不用修改环境变量并重新运行 yarn dev
const mocked = true;
if (mocked && import.meta.env.DEV) {
  console.log('msw 数据开始加载');

  const { worker } = await import('./browser');
  worker.start({
    // 对于没有 mock 的接口直接通过，避免异常
    onUnhandledRequest: 'bypass',
  });
  console.log('msw 数据加载结束');
} else {
  console.log('msw 数据功能未开启，直接向后端请求数据');
}
