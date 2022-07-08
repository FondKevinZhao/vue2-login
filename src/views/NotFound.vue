<template>
  <div class="not-found-wrapper">
    <h1>Sorry, 该页面存在</h1>
    <button @click="goLogin">点击去往登录页</button>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.not-found-wrapper {
  color: red;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.not-found-wrapper h1 {
  margin-right: 20px;
}
</style>