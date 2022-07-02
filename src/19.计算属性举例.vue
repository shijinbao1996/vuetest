<template>
  <div>
    <span>姓</span>
    <input type="text" v-model="firstName" /><br />
    <span>名</span>
    <input type="text" v-model="lastName" /><br />
    <span>姓名</span>
    <input type="text" v-model="fullName" /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  computed: {
    fullName: {
      set(val) {
        // val是fullName
        const arr = val.split('.');
        this.firstName = arr[0] || '';
        this.lastName = arr[1] || '';
      },
      get() {
        return this.firstName ? this.firstName + '.' + this.lastName : '';
      },
    },
  },
};
</script>

<style></style>
