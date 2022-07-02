<template>
  <div>
    <!-- 语法: {{ 值 | 过滤器名字 }} -->
    <div>{{ msg | toLowerCase }}</div>
    <!--插值表达式 -->
    <h2 :title="msg | toUp">{{ msg | toUp | toReverse('*') }}</h2>
  </div>
</template>

<script>
// 过滤器作用： 可被用于一些常见的文本格式化。
// 过滤器本质：是一个函数，返回一个处理后的值
// 使用方式：过滤器只能：1、插值表达式{{}} 2、v-bind表达式中，通过 ｜ 方式使用

// 过滤器的使用步骤
// 1.注册
// 1.1 局部
// filters: {
//   过滤器的名称(val) { // 需要被处理的数据
//     return 处理后的数据
//   }
// }
// 1.2  main中添加
// 全局过滤器
// Vue.filter("过滤器名", (值) => {return "返回处理后的值"});
// 直接写在main.js上加
// Vue.filter('toLowerCase', (val) => {
//   return val.toLowerCase();
// });

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
      console.log(val);
      return val.toUpperCase();
    },
  },
};
</script>

<style></style>
