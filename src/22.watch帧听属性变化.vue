<template>
  <div>
    <input type="text" v-model="acount.name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      acount: {
        name: '',
        age: '',
      },
    };
  },
  watch: {
    // newVal 是改变之后的值，oldVal 是改变之前的值
    // name(newval, oldval) {
    //   console.log(newval, oldval);
    // },
    // 可以拿到最新的值
    // name(val) {
    //   console.log(val);
    // },

    // 深度帧听
    // acount: {
    //   handler(val) {
    //     console.log(val);
    //   },
    //   deep: true,
    //   immediate: true,
    // },

    // 深度帧听
    'acount.name': {
      handler(val) {
        console.log(val);
      },
      //   deep: true,
      //   immediate: true,
    },
  },
};
// watch: {
// 当被侦听的属性的发生改变的时候， 会触发这个函数
// "被侦听的属性名" (newVal, oldVal){
// newVal 是改变之后的值
// oldVal 是改变之前的值
// }
// }
</script>

<style></style>
