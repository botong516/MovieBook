// 运行时配置

import { message } from 'antd';
import { history, RequestConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'Botong' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const request: RequestConfig = {
  timeout: 30 * 1000,
  baseURL: '/api/v1',
  // other axios options you want
  errorConfig: {
    errorHandler(error) {
      if (error.response?.status === 401) {
        history.push('/login');
        return;
      }
      console.error('api error', error);
      message.error(error?.response?.data?.message || '请求错误');
    },
    errorThrower() {},
  },
  requestInterceptors: [
    (config) => {
      // const token = localStorage.getItem(ACCESS_TOKEN_LOCAL_KEY);
      // // 没有登录请求，并且没有 token 的时候直接进入登录页面
      // if (config.url.indexOf('/admin/login') === -1 && !token) {
      //   history.push('/login');
      // }

      // // 禁止缓存
      // const url = config.url.concat(`?t=${+new Date()}`);

      // // 忽略为空字符串的参数，防止后端接口报错
      // const params = config.params || {};
      // Object.keys(params).forEach((key) => {
      //   const val = params[key];
      //   if (val === '' || val === undefined || val === null) {
      //     delete params[key];
      //   }
      // });

      return {
        ...config,
        // params,
        // url,
        headers: {
          ...config.headers,
          // Authorization: `Bearer ${token}`,
        },
      };
    },
  ],
  responseInterceptors: [
    (response) => {
      return response;
    },
  ],
};
