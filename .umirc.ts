import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{ 
    name: 'MoviesBook',
    locale: true
  },
  routes: [
    // { path: '/login', component: 'login' },
    {
      path: '/',
      // component: '@/layouts/index',
      routes: [
        { path: '/movies', component: '@/pages/movies' },
      ],
    }, 
  ],
  fastRefresh: {},
});
