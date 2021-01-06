<template>
  <!-- v-model后面的变量的值对应下面el-tab-pane里面的name属性值 -->
  <!-- @tab-click点击tab栏的时候触发的函数 -->
  <!-- tab-position控制tab栏的方向 -->
  <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="top">
    <!-- label栏目的名称 -->
    <!-- name，与v-model的变量的值相对应 -->
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      // 进入页面默认显示name=second的那个栏目
      activeName: "second",
    };
  },
  methods: {
    handleClick() {
      console.log(this.activeName);
    },
  },
};
</script>
<style >
</style>