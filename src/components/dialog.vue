<template>
  <div>
    <button @click="handle">点击打开对话框</button>
    <!-- dialogVisible显示隐藏对话框 -->
    <!-- title显示对话框的标题 -->
    <el-dialog title="对话框的标题" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handle: function () {
      this.dialogVisible = true
    },
  },
};
</script>
<style >
</style>