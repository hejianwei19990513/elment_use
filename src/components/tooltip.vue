<template>
  <div class="top">
    <!-- content属性来决定hover时的提示信息 -->
    <!-- placement提示文字出现的位置start代表左或者上，end代表右或者下 -->
    <el-tooltip effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button class="top-start">上左</el-button>
    </el-tooltip>
    <el-tooltip effect="dark" content="Top Left 提示文字" placement="top">
      <el-button class="top">正上</el-button>
    </el-tooltip>
    <el-tooltip effect="dark" content="Top Left 提示文字" placement="top-end">
      <el-button class="top-end">上右</el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {};
</script>
<style >
.el-tooltip {
  position: absolute;
  top: 20%;
  left: 30%;
}
.top {
  margin-left: 20px !important;
}
.top-start {
  margin-left: 120px !important;
}
.top-end {
  margin-left: 220px !important;
}
</style>