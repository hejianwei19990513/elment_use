<template>
  <!-- :reverse指定节点排序方向是否正序，默认为false（正序），true是倒序 -->
  <el-timeline :reverse="false">
    <!-- :timestamp时间戳 -->
    <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp" :icon="activity.icon" :color="activity.color">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</template>
<script>
export default {
  data() {
    return {
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-11",
          icon: "el-icon-more",
          color: '#0bbd87'
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-15",
          icon:'el-icon-check',
          color: '#0bbd87'
        },
      ],
    };
  },
  methods: {},
};
</script>
<style >
</style>