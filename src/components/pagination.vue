<template>
  <!-- 一般与表格连用 -->
  <div class="block">
    <!-- @size-change页面pageSize改变时触发-->
    <!-- @current-change页面currentPage改变时会触发-->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pagenum" :page-sizes="[5, 10, 20, 40]" :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      queryInfo: {
        // 当前显示的页码值
        pagenum: 1,
        // 每页显示多少条数
        pagesize: 5,
      },
    };
  },
  methods: {
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      //   this.getList();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      //   this.getList();
    },
  },
};
</script>
<style >
</style>