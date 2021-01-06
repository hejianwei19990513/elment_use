<template>
  <el-row>
    <button @click="handle">点击我切换菜单栏</button>
    <el-col :span="12">
      <!-- unique-opened子菜单展开唯一 -->
      <!-- :collapse后面的值可以设置成一个变量，这样可以控制菜单栏的水平折叠 -->
      <!-- :collapse-transition控制是否有折叠动画 -->
      <!-- default-active当前默认激活菜单栏的index值，与下面的:index="item.id"连用 -->
      <el-menu background-color="#333744" text-color="#fff" active-text-color="#409bff" unique-opened :collapse="flag" :collapse-transition="true" default-active="2">
        <!-- 一级菜单栏 -->
        <el-submenu :index="item.id+''" :key="item.id" v-for="item in menuList1">
          <template slot="title">
            <i :class="iconList[item.id]"></i>
            <span style="padding:10px">{{item.authName}}</span>
          </template>

          <!-- 二级菜单栏 -->
          <el-menu-item :index="subItem.id" :key="subItem.id" v-for="subItem in item.children">
            <i class="el-icon-menu"></i>
            <span slot="title" style="padding-left:4.3px" :id="subItem.id">{{subItem.authName}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data: function () {
    return {
      flag: false,
      iconList: {
        125: "el-icon-eleme",
        103: "el-icon-s-tools",
        101: "el-icon-user-solid",
        102: "el-icon-star-on",
        145: "el-icon-goods",
      },
      menuList1: [
        {
          id: 125,
          authName: "子菜单栏1-1",
          children: [
            {
              id: 0,
              authName: "子菜单栏2-1",
            },
          ],
        },
        {
          id: 103,
          authName: "子菜单栏1-2",
          children: [
            {
              id: 1,
              authName: "子菜单栏2-2",
            },
          ],
        },
        {
          id: 101,
          authName: "子菜单栏1-3",
          children: [
            {
              id: 2,
              authName: "子菜单栏2-3",
            },
          ],
        },
        {
          id: 102,
          authName: "子菜单栏1-4",
          children: [
            {
              id: 3,
              authName: "子菜单栏2-4",
            },
          ],
        },
        {
          id: 145,
          authName: "子菜单栏1-5",
          children: [
            {
              id: 4,
              authName: "子菜单栏2-5",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handle: function () {
      this.flag = !this.flag;
    },
  },
};
</script>
<style >
.el-menu {
  width: 250px;
}
.iconfont {
  width: 10px !important;
}
</style>