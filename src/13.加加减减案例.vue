<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <span>{{ item }}</span> <button @click="delFn(index)">删除</button>
      </li>
    </ul>
    <button @click="addFn">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
    };
  },
  methods: {
    delFn(ind) {
      this.arr.splice(ind, 1);
    },
    addFn() {
      // this.arr.length - 1;//索引this.arr.length - 1
      this.arr.push(Math.floor(Math.random() * (20 - 0 + 1) + 0));
    },
  },
};
</script>

<style></style>
