import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import routers from './router';


Vue.use(VueRouter);

const routerInstance = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({x: 0, y: 0});
      }, 0);
    });
  },
});
routerInstance.beforeEach((to, from, next) => {
      next();
    });

export default routerInstance;
