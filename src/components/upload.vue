<template>
  <!-- action必选参数，上传的地址 -->
  <!-- :on-preview点击文件列表中已上传的文件时的钩子 -->
  <!-- :on-remove文件列表移除文件时的钩子 -->
  <!-- on-success文件上传成功时的钩子 -->
  <el-upload action="http://127.0.0.1:8888/api/private/v1/upload" :on-preview="handlePreview" :on-remove="handleRemove" list-type="picture" :on-success="handlesuc">
    <!-- <el-upload action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" list-type="picture" on-success="handlesuc" :headers="headersObj"> :headers设置请求头，因为不设置就上传会显示无效的token -->
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>
<script>
export default {
  data() {
    return {
      // 设置的请求头
      //   headersObj: {
      //     Authorization: window.sessionStorage.getItem("token"),
      //   },
    };
  },
  methods: {
    handlePreview() {
      console.log("预览效果");
    },
    handleRemove() {
      console.log("处理移除操作");
    },
    handlesuc(res) {
      console.log(res);
    },
  },
};
</script>
<style >
</style>