<template>
  <div class="zj1">
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandler1">增加1</button>
    <button @click="btnHandler2">增加2</button>
    <button @click="btnHandler3">一秒后+1</button>
    <button @click="btnHandler4">一秒后+5</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnHandler1() {
      this.$store.commit('add')
    },
    btnHandler2() {
      this.$store.commit('addN', 2)
    },
    btnHandler3() {
      this.$store.dispatch('addAsync')
    },
    btnHandler4() {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>

<style>
  .zj1{
    width: 300px;
    height: 200px;
    background-color: coral;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  button{
    margin: 3px;
    width: 100px;
    height: 20px;
  }
</style>