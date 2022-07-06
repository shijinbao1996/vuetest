<template>
  <div>
    <dataRender>
      <template v-slot:option="scope">
        <td v-show="scope.row.type == 0">
          <a href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
        </td>
        <td v-show="scope.row.type == 1">
          <img :src="scope.row.headImgUrl" alt="" width="45px" />
        </td>
        <td v-show="scope.row.type == 2">
          <p>{{ scope.row.headImgUrl }}</p>
        </td>
      </template>
    </dataRender>
  </div>
</template>

<script>
import dataRender from "./component/dataRender.vue";
export default {
  data() {
    return {};
  },
  components: { dataRender },
};
</script>

<style>
</style>