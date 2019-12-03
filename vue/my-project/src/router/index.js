import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

import routeDemo from '@/components/RouteDemo';
import grammar from '@/components/Grammar';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/route_demo',
      name: 'RouteDemo',
      component: routeDemo
    },
    {
      path: '/grammar',
      name: 'Grammar',
      component: grammar
    }
  ]
});
