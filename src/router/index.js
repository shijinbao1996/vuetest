// 1.安装完导入路由
import Vue from 'vue'
import VueRouter from "vue-router";

import Home from '@/views/Home'
import Search from '@/views/Search'
import Layout from '@/views/Layout'

// 2.使用路由插件（注册）
Vue.use(VueRouter)
// 3.创建路由规则
const routes = [
    {
        path:'/',
        redirect:'/layout'
    },
    {
      path:'/layout',
      component:Layout,
      redirect:'/layout/home',
      children:[
        {
            path:'home',
            component:Home ,
            meta:{
                title:'主页'
            //元信息-给当前路由对象绑定值
            }
           

          },
          {
              path:'search',
              component:Search,
              meta:{
                title:'搜索'
            }
          }
      ]
    },
]
// 创建VueRouter实例
const router = new VueRouter({
    routes
})

export default router

