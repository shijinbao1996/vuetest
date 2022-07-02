<template>
  <div>
    <ul>
      <!-- 需求:将数组arr的内容渲染到ul中 
      v-for 循环数据 每循环一次 生成对应的dom元素
      key: 唯一值 类型string/number 提高性能
      -->

      <!-- item 数组里边的每一个元素 -->
      <li v-for="item in arr" :key="item">{{ item }}</li>
      <!-- item 数组里边的每一个元素,
      index 索引号 -->
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
      <!-- 下面的li里面的item别的地方拿不到 -->
      <li v-for="item in newarr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      newarr: [15, 6, 7, 8],
    };
  },
};
</script>

<style></style>
