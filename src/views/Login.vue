<template>
  <div class="wrapper">
    <div>
      <h1>登录界面</h1>
      <div>
        用户名：<input type="text" v-model="user" /><br /><br />
        密 码：<input type="text" v-model="pwd" /><br /><br />
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      // 1. 点击登录获取用户名和密码 这里只做用户名，因为密码做法是一样的

      // 2. 这个名字和密码需要存起来 -- 在导航守卫里面需要读取这个数据
      // 2.1 存储到localStorage   2.2 存在原型上(比较复杂，需要把Vue引进来然后才能挂载到原型上)    2.3 存在根Vue实例上，也就是main.js里面
      localStorage.setItem("user", this.user);
      // 存完以后需要到router =》index.js中去读

      // 3. 跳转到首页
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>