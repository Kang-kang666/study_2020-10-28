<template>
    <div class="tab">
        <ul>
            <li v-for="item in menuelist" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
      return {
        menuelist: []
      }
  },
  created() {
    this.getSortList()
  },
  methods: {
    async getSortList() {
        const res = await this.$axios.get('code/query')
        // console.log(res.data.data.content);
        this.menuelist = res.data.data.content
        // console.log(this.menuelist);
        // if(res.status !== 200) return this.$message.error('请求失败')
    }
   }
}
</script>

<style>
    .tab ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tab ul li {
        width: 200px;
        height: 50px;
        line-height: 50px;
        list-style: none;
        text-align: center;
        background-color: cornflowerblue;
        cursor: pointer;
    }

    .tab ul li.active {
        background-color: burlywood;
    }
    
    .tab div {
        margin: auto;
        width: 100vh;
        height: 300px;
        display: none;
        text-align: center;
        font-size: 30px;
        line-height: 300px;
        border-top: 0px;
    }

    .tab div.current {
        display: block;
    }
</style>