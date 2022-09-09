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
  proxy: {
    '/api': {
      'target': 'http://localhost:8080',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '主页',
      path: '/home',
      component: './Home',
    },
    {
      name: '电影搜索',
      path: '/search',
      component: './Search',
    },
    {
      name: '最受欢迎TOP250',
      path: '/top250',
      component: './Top250',
    },
    {
        name: '用户收藏',
        path: '/User',
        component: './User',
    },
    {
      name: '电影详情',
      path: '/detail/:id',
      component: './Detail',
  },
  ],
  npmClient: 'yarn',
});

