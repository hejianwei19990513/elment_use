<template>
  <!-- :data绑定的数据 -->
  <!-- show-checkbox节点是否有复选框，默认为false -->
  <!-- default-expand-all是否展开所以节点，默认为false -->
  <!-- node-key每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 -->
  <!-- ref可以使用this.$refs.treeRef.function调用树形控件固有的方法 -->
  <!-- :props配置子节点选项 -->
  <!-- @node-click节点被点击时调用 -->
  <!-- :default-checked-keys默认勾选的节点数组 -->
  <el-tree :data="data" show-checkbox default-expand-all node-key="id" ref="treeRef" :props="defaultProps" :default-checked-keys="defaultchecked" @node-click="handle">
  </el-tree>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "一级 1",
          children: [
            {
              id: 4,
              name: "二级 1-1",
              children: [
                {
                  id: 9,
                  name: "三级 1-1-1",
                },
                {
                  id: 10,
                  name: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "一级 2",
          children: [
            {
              id: 5,
              name: "二级 2-1",
            },
            {
              id: 6,
              name: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          name: "一级 3",
          children: [
            {
              id: 7,
              name: "二级 3-1",
            },
            {
              id: 8,
              name: "二级 3-2",
            },
          ],
        },
      ],
      //   配置子节点选项，从上面的data数组可以看出，子节点由父节点的children属性得到，所以这里的children值为"children",同样，label渲染子节点名字是由data数组的name属性得到
      defaultProps: {
        children: "children",
        label: "name",
      },
      //   默认勾选的节点数组
      defaultchecked: [9, 10],
    };
  },
  methods: {
    handle: function () {
      // getCheckedNodes得到当前勾选的所以子节点的key值
      console.log(this.$refs.treeRef.getCheckedNodes());
    },
  },
};
</script>
<style >
</style>