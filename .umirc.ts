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
        name: '电影Table',
        path: '/table',
        component: './Table',
    },
    {
      name: '电影详情',
      path: '/detail',
      component: './Detail',
  },
  ],
  npmClient: 'yarn',
});

