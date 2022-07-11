<template>
  <div>
    <div>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        @input="inputFn"
      />
    </div>
    <template v-if="show">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          round
          plain
          color="hotpink"
          type="primary"
          size="large"
          v-for="(item, index) in searchVal"
          :key="index"
          style="margin-right: 5px"
          @click="clickFn(item)"
          >{{ item.first }}</van-tag
        >
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchResult"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>

<script>
import { getSearchListApi, getSearchResultApi } from "@/apis";
export default {
  data() {
    return {
      value: "",
      searchVal: [],
      show: true,
      searchResult: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,
    };
  },
  mounted() {
    this.searchList();
  },
  methods: {
    async searchList() {
      try {
        const res = await getSearchListApi();
        // console.log(res);
        this.searchVal = res.data.result.hots;
      } catch (e) {
        console.log("e", e);
      }
    },

    async clickFn(val) {
      this.show = false;
      this.value = val.first;
      try {
        const res = await getSearchResultApi({
          keywords: this.value,
        });
        console.log(res);
        this.searchResult = res.data.result.songs;
        this.$toast.success("成功文案");
      } catch (e) {
        console.log("e", e);
        this.$toast.fail("失败文案");
      }
    },
    async inputFn() {
      if (this.value.length === 0) {
        this.searchResult = [];
        return;
      }
      const res = await getSearchResultApi({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20,
      });
      console.log(res);
      this.searchResult = res.data.result.songs;
    },
    async onLoad() {
      this.page++;
      const res = await getSearchResultApi({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20,
      });
      this.searchResult = [...this.searchResult, res.data.result.songs];
      this.loading = false;
    },
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>