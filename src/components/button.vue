<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <!-- type控制按钮的颜色样式 -->
    <!-- size控制按钮的大小 -->
    <el-button type="primary" size="mini">主要按钮</el-button>

    <!-- round是否圆角按钮 -->
    <el-button type="success" round>成功按钮</el-button>

    <!-- plain为朴素按钮，就是点击按钮的颜色由浅色变为深色 -->
    <el-button type="info" plain>信息按钮</el-button>

    <!-- circle是否圆形按钮 -->
    <el-button type="warning" circle>警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <!-- icon给button加入图标 -->
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </el-row>
</template>
<script>
export default {};
</script>
<style scoped>
</style>