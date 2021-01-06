<template>
  <!-- v-model控制开关的开启和关闭 -->
  <el-switch v-model="value" active-color="#13ce66" inactive-color="#dcdfe6" @change="handle">
  </el-switch>
</template>
<script>
export default {
  data: function () {
    return {
      value: false,
    };
  },
  methods:{
      handle:function(){
          console.log(1);
      }
  }
};
</script>
<style >
</style>