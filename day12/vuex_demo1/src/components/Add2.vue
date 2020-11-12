<template>
  <div class="zj1">
    <h3>{{showNum}}</h3>
    <button @click="btnHandler1">增加1</button>
    <button @click="subN(2)">增加2</button>
    <button @click="subAsync">一秒后+1</button>
    <button @click="subNAsync(5)">一秒后+5</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHandler1() {
      this.sub()
    }
  }
}
</script>