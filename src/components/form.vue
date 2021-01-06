<template>
  <!-- :model后面的值是绑定的数据，从后端发送回来的数据 -->
  <!-- :rules后面的值是校验规则，定义表单的校验规则 -->
  <!-- ref是表单的本身属性，可以调用this.$refs.ruleForm.resetFields()重置表单的方法（还有其他方法） -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
    <!-- label是input输入框前面的字符 -->
    <!-- prop是该input框绑定上面ruleForm数据里面的一个叫做name的属性 -->
    <el-form-item label="活动名称" prop="name">
      <!-- model绑定ruleForm数据对象里面name的值 -->
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data: function () {
    return {
      ruleForm: {
        name: "我是ruleForm里面name属性的值",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入名称",
            trigger: "blur",
          },
          {
            min: 3,
            max: 6,
            message:'3到6个字符之间',
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>