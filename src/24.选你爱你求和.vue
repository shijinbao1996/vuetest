<template>
  <div>
    <div v-for="item in arr" :key="item">
      <input type="checkbox" v-model="checkNumber" :value="item" />{{ item }}
    </div>
    求和：{{ getTotal }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      checkNumber: [],
    };
  },
  computed: {
    getTotal() {
      return this.checkNumber.reduce((sum, next) => (sum += next), 0);
    },
  },
};
</script>

<style></style>
