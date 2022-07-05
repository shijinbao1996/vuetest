<template>
  <div>
    <input
      type="text"
      placeholder="搜索-书本名称"
      @keyup.enter="enters"
      v-model="task"
    /><br /><br />
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <headerS
          v-for="item in list"
          :key="item.id"
          :obj="item"
          @dels="delsFn"
          @mores="moresFn"
        ></headerS>
      </tbody>
      <br />
    </table>
    <footerS></footerS>
    <div v-show="isShow">{{ moreInfo }}</div>
  </div>
</template>

<script>
import headerS from "./components/Header.vue";
import footerS from "./components/Footer.vue";
import infoS from "./components/Info.vue";

export default {
  data() {
    return {
      list: [],
      task: "",
      id: "",
      isShow: true,
      moreInfo: "",
    };
  },
  methods: {
    enters() {
      if (this.task.length == 0) {
        alert("请输入");
      }
      this.$axios({
        url: "/api/getbooks",
      }).then((res) => {
        console.log(res);
        this.list = res.data.data.filter((item) => item.bookname == this.task);
      });
      // this.task = "";
    },
    delsFn(id) {
      console.log(id);
      // let index = this.list.findIndex((ele) => ele.id == id);
      // console.log(index);
      // async function a() {
      //   const b = await this.$axios({
      //     url: "/api/delbook",
      //     method: "GET",
      //     params: {
      //       id,
      //     },
      //   });
      //   console.log(b);
      //   const c = await this.$axios({
      //     url: "/api/getbooks",
      //   });

      //   const d = await (this.list = c.data.data);

      this.$axios({
        url: "/api/delbook",
        method: "GET",
        params: {
          id,
        },
      }).then((res) => {
        this.$axios({
          url: "/api/getbooks",
        }).then((res) => {
          this.list = res.data.data;
        });

        // this.list.splice(this.list[index], 1);
      });

      // }
      // a.call(this);
    },
    moresFn(id) {
      this.$axios({
        url: "/api/getbooks",
        method: "GET",
        params: {
          id,
        },
      }).then((res) => {
        console.log(...res.data.data);
        this.moreInfo = res.data.data;
        this.isShow = !this.isShow;

        // this.list.splice(this.list[index], 1);
      });

      // let index = this.list.findIndex((ele) => ele.id == id);
    },
  },
  components: {
    headerS,
    footerS,
    infoS,
  },
  created() {
    this.$axios({
      url: "/api/getbooks",
      method: "GET",
      // params: {
      //   id: 1,
      // },
    }).then((res) => {
      console.log(...res.data.data);
      this.list = res.data.data;
      console.log(res);
      // console.log(res);
    });
  },
};
</script>

<style>
</style>