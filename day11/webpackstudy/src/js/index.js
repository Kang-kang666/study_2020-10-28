import '../css/index.css';



console.log('1243');
// ----------------------vue


import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'

Vue.use(VueRouter)

const vm = new Vue ({
    el: '#app',
    //可以简写router
    router: router, 
    //把指定的组件渲染到区域
    render: h => h(App)
})

//安装路由插件
const router = new VueRouter({
    routes: [
      { path: '/', redirect: '/nr1'},
      { path: '/nr1', component: neirong1 },
      { path: '/nr2', component: neirong2,children: [
          { path: '/nr2/:id', component: A1, props: route => ({uname: 'ckang', age: 22, id: route.params.id}) }
      ]}
    ]
})


  