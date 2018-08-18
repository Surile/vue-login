<template>
  <el-container>
    <el-aside width="200px" height="auto">
      <el-menu 
        class="menu"
        :router="true" 
      >
      <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-location" />
            <span>用户列表</span>
        </template>
      </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.menu {
  min-height: 700px;
}
</style>