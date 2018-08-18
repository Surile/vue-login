<template>
  <el-container>
    <el-header 
      class="header" 
      height="54px">
      <el-row 
        class="content" 
        type="flex"
        >
        <el-col :span="20">
          <span class="title">
            Node-Login
          </span>
        </el-col>
        <el-col 
          :span="4" 
          v-if="isLogin"
        >
          <el-dropdown>
            <el-button type="text">
              用户<i class="el-icon-arrow-down el-icon--right"/>
            </el-button>
            <el-dropdown-menu 
              slot="dropdown" 
            >
              <el-dropdown-item 
                @click.native="loginOut"
              >
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
      <div class="content">
        <router-view></router-view> 
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    loginOut() {
      this.$store.dispatch("signout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style/page.scss";
</style>
