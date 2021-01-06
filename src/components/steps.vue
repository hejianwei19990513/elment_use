<template>
  <div>
    <!-- :active后面的变量的值是数字型 -->
    <el-steps :active="active" finish-status="success" space='400px'>
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
      <el-step title="步骤 4"></el-step>
    </el-steps>
    <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
      <el-tab-pane label="用户管理" name="0">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="1">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="2">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="3">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      activeName: "0",
    };
  },
  methods: {
    handleClick() {
      // 因为:active的值是一个数字型的变量， 在实现步骤条与tab栏目相匹配时需要将tabs里面的v-model对应的字符串变量转化为数字，
      this.active = this.activeName - 0;
    },
  },
};
</script>
<style >
</style>