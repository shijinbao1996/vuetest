<template>
  <div>
    <!-- 语法: {{ 值 | 过滤器名字 }} -->
    <div>{{ msg | toUp }}</div>
  </div>
</template>

<script>
// 过滤器的使用步骤
// 1.注册
// 1.1 局部
// filters: {
//   过滤器的名称(val) { // 需要被处理的数据
//     return 处理后的数据
//   }
// }
// 2.使用 插值表达式 v-bind表达式  ｜

export default {
  data() {
    return {
      msg: 'Hello World',
    };
  },
  //1、局部过滤器
  filters: {
    toUp(val) {
      return val.toUpperCase();
    },
  },
};
</script>

<style></style>
