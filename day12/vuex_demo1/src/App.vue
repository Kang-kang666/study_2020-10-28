<template>
  <div class="im">
    <my-add1></my-add1>

    <p>----------两边数据可实现交互----------</p>

    <my-add2></my-add2>
  </div>
</template>

<script>
import Add1 from './components/Add1.vue'
import Add2 from './components/Add2.vue'

export default {
  data() {
    return {}
  },
  components: {
    'my-add1': Add1,
    'my-add2': Add2
  }
}
</script>

<style>
  .im {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
</style>