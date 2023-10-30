import { HttpHandler } from 'msw';

// 定义 glob 导入路由文件的类型，缩短单行长度
type HandlerFile = Record<string, { handlers: HttpHandler[] }>;

export const handlers: HttpHandler[] = [];
// 使用同步加载依赖
// 防止 pinia 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
const modules: HandlerFile = import.meta.glob('./*.ts', { eager: true });
for (const path in modules) {
  if (
    Object.prototype.hasOwnProperty.call(modules, path) &&
    path != './index.ts'
  ) {
    // 同步加载时会直接执行代码，所有将mock代码封装到init方法中
    handlers.push(...modules[path].handlers);
  }
}
