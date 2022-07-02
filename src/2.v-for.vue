<template>
  <div>
    <!--  -->
    <h1>遍历普通数组</h1>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>

    <h1>遍历数组</h1>
    <ul>
      <li v-for="item in stuArr" :key="item.id">
        {{ item.name }}== {{ item.sex }}== {{ item.hobby }}
      </li>
    </ul>

    <h1>遍历对象</h1>
    <ul>
      <li v-for="item in tObj" :key="item">{{ item }}</li>
    </ul>

    <h1>遍历数字</h1>
    <ul>
      <li v-for="item in count" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['小明', '小欢欢', '大黄'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      count: 10,
    };
  },
};
</script>

<style></style>
