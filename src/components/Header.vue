<template>
  <tr>
    <td>{{ obj.id }}</td>
    <td>{{ obj.bookname }}</td>
    <td>{{ obj.author }}</td>
    <td>{{ obj.publisher }}</td>
    <td>
      <a href="javascript:;" @click="del(obj.id)">删除</a>
      <a href="javascript:;" @click="more(obj.id)">详情</a>
    </td>
  </tr>
</template>

<script>
export default {
  methods: {
    del(id) {
      this.$emit("dels", id);
    },
    more(id) {
      this.$emit("mores", id);
    },
  },
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>