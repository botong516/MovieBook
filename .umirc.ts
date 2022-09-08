import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'MoviesBook',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '用户主页',
      path: '/home',
      component: './Home',
    },
    {
      name: '最受欢迎TOP250',
      path: '/access',
      component: './Access',
    },
    {
        name: '电影搜索',
        path: '/table',
        component: './Table',
    },
  ],
  npmClient: 'yarn',
});

