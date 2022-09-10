import { defineConfig } from '@umijs/max';
import {
  BookOutlined,
  FireOutlined,
  HistoryOutlined,
  SearchOutlined,
} from '@ant-design/icons';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'MovieBook',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
    '/login': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
    '/register': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      icon: 'dashboard',
      component: './Home',
    },
    {
      name: 'Search',
      path: '/search',
      icon: 'SearchOutlined',
      component: './Search',
    },
    {
      name: 'IMDb TOP 250 Movies',
      path: '/top250',
      icon: 'fireOutlined',
      component: './Top250',
    },
    {
      name: 'My Movie Lists',
      path: '/user',
      icon: 'bookOutlined',
      component: './UserFavorite',
    },
    {
      path: '/detail/:id',
      component: './Detail',
    },
    {
      path: '/userlogin',
      component: './Login',
    },
    {
      path: '/userregister',
      component: './Register',
    },
  ],
  npmClient: 'yarn',
});
