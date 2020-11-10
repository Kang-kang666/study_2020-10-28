<template>
    <div class="zujian">
        <h1>这是app根组件</h1>
        <input type="text" placeholder="请输入任务">
    </div>
</template>

<script>
export default {
    data() {
        return;
    },
    methods: {}
};
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