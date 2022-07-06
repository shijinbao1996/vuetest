<template>
  <div>
    <button @click="componentId = 'Phone'">手机注册</button>
    <button @click="componentId = 'Email'">邮箱注册</button>
    <div>
      <keep-alive>
        <component :is="componentId">
          <template v-slot:pwds>
            <p>登陆密码</p>
            <input type="password" /><br /><br />
            <input type="password" placeholder="再次输入登陆密码" />
          </template>
          <template v-slot:invite>
            <p>邀请码</p>
            <input type="text" placeholder="输入邀请码" />
          </template>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Phone from "./PhoneRegister.vue";
import Email from "./EmailRegister.vue";

export default {
  data() {
    return {
      componentId: "Phone",
    };
  },
  components: {
    Phone,
    Email,
  },
};
</script>

<style>
</style>