<template>
  <div>
    购物车商品总价：
    <!-- 商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
    {{ getTotal }}
    {{ getTotal }}
    {{ getTotal }}
    {{ getTotal }}
    {{ getTotal }}
    <input type="text" v-model="full" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 5,
      price: 98,
      coupon: 400,
    };
  },
  computed: {
    getTotal() {
      console.log('计算');
      return this.total * this.price >= 500
        ? this.total * this.price - this.coupon
        : this.total * this.price;
    },

    // computed: {
    //     // 即可以取值，又可以设置值
    //     "计算属性名": {
    //         set(值){ //  设置值

    //         },
    //         get() { // 取值
    //             return "值"
    //         }
    //     },
    //     "计算属性名" (){}, // 只读，只可以取值
    // }
    full: {
      get() {
        return console.log('1212');
      },
      set(val) {
        console.log(val);
      },
    },
  },
};
</script>
