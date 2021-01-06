<template>
  <div class="block">
    <!-- v-model后面的值是个数组，里面是选中某个选项的所以节点的id -->
    <!-- :options绑定的数据 -->
    <!-- :props配置项 -->
    <el-cascader v-model="value" :options="options" :props="props" @change="handleChange"></el-cascader>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          id: "1",
          label: "指南",
          children: [
            {
              id: "2",
              label: "设计原则",
              children: [
                {
                  id: "3",
                  label: "一致",
                },
                {
                  id: "4",
                  label: "反馈",
                },
                {
                  id: "5",
                  label: "效率",
                },
                {
                  id: "6",
                  label: "可控",
                },
              ],
            },
            {
              id: "7",
              label: "导航",
              children: [
                {
                  id: "8",
                  label: "侧向导航",
                },
                {
                  id: "9",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          id: "10",
          label: "组件",
          children: [
            {
              id: "11",
              label: "Basic",
              children: [
                {
                  id: "12",
                  label: "Layout 布局",
                },
                {
                  id: "13",
                  label: "Color 色彩",
                },
                {
                  id: "14",
                  label: "Typography 字体",
                },
                {
                  id: "15",
                  label: "Icon 图标",
                },
                {
                  id: "16",
                  label: "Button 按钮",
                },
              ],
            },
            {
              id: "17",
              label: "Form",
              children: [
                {
                  id: "18",
                  label: "Radio 单选框",
                },
                {
                  id: "19",
                  label: "Checkbox 多选框",
                },
                {
                  id: "20",
                  label: "Input 输入框",
                },
                {
                  id: "21",
                  label: "InputNumber 计数器",
                },
                {
                  id: "22",
                  label: "Select 选择器",
                },
                {
                  id: "23",
                  label: "Cascader 级联选择器",
                },
                {
                  id: "24",
                  label: "Switch 开关",
                },
                {
                  id: "25",
                  label: "Slider 滑块",
                },
                {
                  id: "26",
                  label: "TimePicker 时间选择器",
                },
                {
                  id: "27",
                  label: "DatePicker 日期选择器",
                },
                {
                  id: "28",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  id: "29",
                  label: "Upload 上传",
                },
                {
                  id: "30",
                  label: "Rate 评分",
                },
                {
                  id: "31",
                  label: "Form 表单",
                },
              ],
            },
            {
              id: "32",
              label: "Data",
              children: [
                {
                  id: "33",
                  label: "Table 表格",
                },
                {
                  id: "34",
                  label: "Tag 标签",
                },
                {
                  id: "35",
                  label: "Progress 进度条",
                },
                {
                  id: "36",
                  label: "Tree 树形控件",
                },
                {
                  id: "37",
                  label: "Pagination 分页",
                },
                {
                  id: "38",
                  label: "Badge 标记",
                },
              ],
            },
            {
              id: "39",
              label: "Notice",
              children: [
                {
                  id: "40",
                  label: "Alert 警告",
                },
                {
                  id: "41",
                  label: "Loading 加载",
                },
                {
                  id: "42",
                  label: "Message 消息提示",
                },
                {
                  id: "43",
                  label: "MessageBox 弹框",
                },
                {
                  id: "44",
                  label: "Notification 通知",
                },
              ],
            },
            {
              id: "45",
              label: "Navigation",
              children: [
                {
                  id: "46",
                  label: "NavMenu 导航菜单",
                },
                {
                  id: "47",
                  label: "Tabs 标签页",
                },
                {
                  id: "48",
                  label: "Breadcrumb 面包屑",
                },
                {
                  id: "48",
                  label: "Dropdown 下拉菜单",
                },
                {
                  id: "50",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              id: "51",
              label: "Others",
              children: [
                {
                  id: "52",
                  label: "Dialog 对话框",
                },
                {
                  id: "53",
                  label: "Tooltip 文字提示",
                },
                {
                  id: "54",
                  label: "Popover 弹出框",
                },
                {
                  id: "55",
                  label: "Card 卡片",
                },
                {
                  id: "56",
                  label: "Carousel 走马灯",
                },
                {
                  id: "57",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          id: "58",
          label: "资源",
          children: [
            {
              id: "59",
              label: "Axure Components",
            },
            {
              id: "60",
              label: "Sketch Templates",
            },
            {
              id: "61",
              label: "组件交互文档",
            },
          ],
        },
      ],
      props: {
        //   指定选项的值为绑定数据的某个属性值，就是上面options里面的value属性，也是上面v-model绑定的value数组存进去的数据
        value: "id",
        // 指定选项标签为选项对象的某个属性值，就是上面options里面的label属性
        label: "label",
        // 指定选项的子选项为选项对象的某个属性值
        children: "children",
        expandTrigger: "hover",
        // 是否可以选择任一级
        checkStrictly: true,
      },
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style >
</style>