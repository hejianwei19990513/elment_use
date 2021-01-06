<template>
  <div>
    <a href="#/messagebox" @click="handle">点我打开消息框</a>
  </div>
</template>
<script>
export default {
  methods: {
    handle: function () {
      this.$messageBox
        .confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          // 弹框时是否将body滚动锁定，默认为true
          lockScroll: false,

          //是否显示输入框，默认为false
          showInput: true,
        })
        //点击确定时会调用这个回调函数
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style >
body {
  height: 1000px;
}
</style>