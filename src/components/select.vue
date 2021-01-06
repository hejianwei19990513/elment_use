<template>
  <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
  <!-- clearable是否可清空， -->
  <el-select v-model="value" placeholder="请选择" multiple clearable collapse-tags filterable>
      <!-- options是需要渲染出来的数据 -->
      <!-- :label的值是想要渲染出来数据的那一项 -->
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>
<script>
export default {
  data: function () {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>
<style scoped>
</style>