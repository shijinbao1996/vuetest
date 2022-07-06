<template>
  <div>
    <p>选择所在地区(实名认证主体所在地)</p>
    <input type="radio" v-model="check" value="0" />中国大陆
    <input type="radio" v-model="check" value="1" />中国香港
    <p>手机号码</p>
    <input type="text" placeholder="请输入手机号" />
    <slot name="pwds"></slot>
    <slot name="invite"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: 0,
      data: {},
    };
  },
};
</script>

<style>
</style>