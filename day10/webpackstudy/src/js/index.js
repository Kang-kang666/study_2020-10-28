import '../css/index.css';



console.log('1243');
// ----------------------vue
import Vue from 'vue'
import App from '../components/App.vue'

const vm = new Vue ({
    el: '#app',
    //把指定的组件渲染到区域
    render: h => h(App)
})
