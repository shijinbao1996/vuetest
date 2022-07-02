<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span>任务名</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '猪八戒',
          c: false,
        },
        {
          name: '孙悟空',
          c: false,
        },
        {
          name: '唐僧',
          c: false,
        },
        {
          name: '白龙马',
          c: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      set(val) {
        //全选框的值依赖复选框计算而来。
        //val为全选框的状态，ele.c是复选框的选中状态。
        this.arr.forEach((ele) => (ele.c = val));
      },
      get() {
        return this.arr.every((ele) => ele.c);
      },
    },
  },
  //   反选
  methods: {
    btn() {
      this.arr.forEach((ele) => (ele.c = !ele.c));
    },
  },
};
</script>
