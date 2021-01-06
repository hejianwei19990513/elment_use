<template>
  <!-- :data绑定的数据 -->
  <!-- border是否有边框 -->
  <!-- stripe是否有斑马纹 -->
  <el-table :data="tableData" style="width: 100%" border stripe>
      <!-- type="index"是按照排序 -->
    <el-table-column type="index" label="#">
    </el-table-column>
    <!-- prop的值是data绑定的数据里面的某一项属性值 -->
    <!-- label表头显示的字符 -->
    <el-table-column prop="date" label="时间" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="type" label="类型">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data: function () {
    return {
      tableData: [
        {
          date: 2016,
          name: "小鞠女神1",
          type: "女神1",
        },
        {
          date: 2017,
          name: "小鞠女神2",
          type: "女神2",
        },
        {
          date: 2018,
          name: "小鞠女神3",
          type: "女神3",
        },
        {
          date: 2019,
          name: "小鞠女神4",
          type: "女神4",
        },
      ],
    };
  },
};
</script>
<style >
</style>