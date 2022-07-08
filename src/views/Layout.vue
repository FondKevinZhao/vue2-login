<template>
  <div>
    <!-- 导航区域 -->
    <div class="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/news">新闻</router-link> |
      <router-link to="/about">我的</router-link>

      <!-- 右侧欢迎xxx -->
      <div class="nav-right">
        <button @click="exit">退出登录</button>
        <span>欢迎：{{ myUser }}</span>
      </div>
    </div>

    <!-- 内容区域 -->
    <!-- 二级出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  computed: {
    myUser() {
      return localStorage.getItem("user");
    },
  },
  methods: {
    exit() {
      // localStorage.removeItem("user");
      localStorage.clear("user");
      this.$router.push("/login");
      alert("退出成功，将跳转到登录页");
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: #999;
  height: 60px;
  line-height: 60px;
}

.nav a {
  font-weight: bold;
  padding: 0 20px;
  color: #fff;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.nav-right {
  float: right;
  padding: 0 20px;
}
button {
  margin-right: 20px;
  cursor: pointer;
}
</style>