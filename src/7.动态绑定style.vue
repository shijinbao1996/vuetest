<template>
  <div>
    <!-- 
      动态绑定css 语法：v-bind:css='{类名：bool/表达式}' 
      动态绑定style 语法：v-bind:style='对象' 
    v-bind:style="{ color: 'red', fontSize: '100px' }"
    -->

    <p v-bind:style="{ color: 'red', fontSize: '100px' }">style</p>
    <p :style="{ color: colorStr, fontWeight: 700 }">style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorStr: 'green',
    };
  },
};
</script>

<style></style>
