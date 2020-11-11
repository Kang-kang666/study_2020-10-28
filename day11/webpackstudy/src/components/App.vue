<template>
    <div class="zujian">
        <h1>这是app根组件</h1>
        <input type="text" placeholder="请输入任务">
        <div>
            <router-link to="/{name: 'nr1'}">导航1</router-link>
            <router-link to="/nr2">导航2</router-link>
    
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return;
        }
    };
    const neirong1 = {
        template: '<h1>导航1的内容</h1>'
    }

    const A1 = {
        props: ['id', 'uname', 'age'],
        template: `<div>
          <h3> 学号：{{id}} 姓名：{{uname}} 年龄：{{age}}</h3>
          <button @click="goA1">跳转页面</button>
          <button @click="goback">回退按钮</button>
          <div>`,
        methods: {
          goA1() {
            this.$router.push('/nr1')
          },
          goback() {
            this.$router.go(-1)
          }
        }
    }

    const neirong2 = {
      template: `<div>
            <h1>导航栏2</h1>

            <router-link to="/nr2/a1">内容导航栏1</router-link>
            <router-link to="/nr2/a2">内容导航栏2</router-link>
            <router-link to="/nr2/a3">内容导航栏3</router-link>
            <router-link to="/nr2/a4">内容导航栏4</router-link>


            <router-view/>
        </div>`
    }


</script>

<style scoped>
    .zujian {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        color: red;
    }
    input {
        height: 30px;
        width: 200px;
        background-color: cadetblue;
        border-radius: 5px;
        margin-bottom: 20px;
    }
</style>