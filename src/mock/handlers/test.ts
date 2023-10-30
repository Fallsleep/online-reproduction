import { http, HttpHandler, HttpResponse } from 'msw';

/**
 * 获取当前用户的班级列表
 */
const test = () =>
  http.get('/test', async ({ request, params, cookies }) => {
    return HttpResponse.json({
      expires_in: 5,
    });
  });

export const handlers: HttpHandler[] = [test()];
