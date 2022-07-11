<template>
  <div class="home-container">
    <van-cell title="推荐歌单" class="title" />
    <van-grid :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="song_name">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>
    <van-cell title="最佳匹配" class="title" />

    <van-cell
      v-for="item in newsong"
      :key="item.id"
      :title="item.name"
      :label="`
      ${
        (item.song && item.song.artists[0] && item.song.artists[0].name) ||
        '未知歌手'
      }-${item.name}`"
    >
      <template>
        <van-icon name="play-circle-o" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getRecommendListApi, getNewsongListApi } from "@/apis";
export default {
  data() {
    return {
      list: [],
      newsong: [],
    };
  },
  mounted() {
    this.getList();
    this.getNewsong();
  },
  methods: {
    async getList() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        });
        // console.log(res);
        this.list = res.data.result;
      } catch (e) {
        console.log("e", e);
      }
    },
    async getNewsong() {
      try {
        const res = await getNewsongListApi({
          limit: 10,
        });
        console.log(res);
        this.newsong = res.data.result;
      } catch (e) {
        console.log("e", e);
      }
    },
  },
};
</script>

<style lang='less'>
/* 标题 */
.home-container {
  .title {
    padding: 0.266667rem 0.24rem;
    margin: 0 0 0.24rem 0;
    background-color: red;
    color: #fff;
    font-size: 15px;
  }
  /* 推荐歌单 - 歌名 */
  .song_name {
    font-size: 0.346667rem;
    padding: 0 0.08rem;
    margin-bottom: 0.266667rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden; /** 隐藏超出的内容 **/
  }
  .van-cell__title {
    // 不换行显示
    white-space: nowrap;
  }
}
</style>