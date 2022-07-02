<template>
  <div>
    <ul>
      <li v-for="item in myArr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myArr: ['帅哥', '美女', '程序员'],
    };
  },
  methods: {
    btn() {
      // 尾部添加第一项
      this.myArr.push(this.myArr[0]);
      // 删除第一项
      this.myArr.shift();
    },
  },
};
</script>

<style></style>
