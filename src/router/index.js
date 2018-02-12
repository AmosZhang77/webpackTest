import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
/** webpack的路径别名,webpack.base.conf.js文件中设定，
 * alias: {
 * 'vue$': 'vue/dist/vue.esm.js',
 * '@': resolve('src'),
 * } */
import Index from '@/page/Index'
import Content from '@/page/content'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      component: Content
    }
  ]
})
