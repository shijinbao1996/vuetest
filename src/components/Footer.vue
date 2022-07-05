<template>
  <div>
    <input type="text" placeholder="书名" v-model="bookF" /><br /><br />
    <input type="text" placeholder="作者" v-model="authorF" /><br /><br />
    <input type="text" placeholder="出版社" v-model="publisherF" /><br /><br />
    <button @click="add">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookF: "",
      authorF: "",
      publisherF: "",
    };
  },
  methods: {
    add() {
      if (
        this.bookF.trim().length == 0 ||
        this.authorF.trim().length == 0 ||
        this.publisherF.trim().length == 0
      )
        return alert("请输入完整内容");
      this.$axios({
        url: "/api/addbook",
        method: "post",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          bookname: this.bookF,
          author: this.authorF,
          publisher: this.publisherF,
        },
      }).then((res) => {
        console.log(res.data.msg);
      });
      this.bookF = "";
      this.authorF = "";
      this.publisherF = "";
      // alert("数据更新成功");
    },
  },
};
</script>

<style>
</style>