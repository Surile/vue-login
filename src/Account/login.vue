<template>
  <el-row type="flex">
    <el-form 
      ref="form"
      :class="$style.spacing" 
      :model="formData" 
      :rules="validator"   
      status-icon 
      label-width="100px"
      @submit.prevent.native="submit">
      <el-form-item 
        label="用户名" 
        prop="name">
        <el-input 
          v-model="formData.name" 
          type="telephone" 
          auto-complete="off" />
      </el-form-item>
      <el-form-item 
        label="密码" 
        prop="password">
        <el-input 
          v-model="formData.password" 
          type="password" 
          auto-complete="off" />
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary" 
          native-type="submit"
        >登录</el-button>
      </el-form-item> 
    </el-form>
    <el-col 
      :class="$style.left" 
      :span="10" 
      :push="5">
        还没有账号？
      <router-link to="/register">
        <el-button type="text">立即注册</el-button>
      </router-link>
    </el-col>
  </el-row>
</template>



<script>
import { userNameValidator } from "../utils/validator.js";
export default {
  data() {
    return {
      formData: {
        name: "",
        password: ""
      },
      validator: {
        name: [
          {
            validator: userNameValidator,
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: (rules, value, callback) => {
              if (!value) {
                new Error(callback("密码不能为空"));
              }
              callback();
            },
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate(valida => {
        if (valida) {
          this.$store
            .dispatch("login", this.formData)
            .then(() => {
              this.$router.push({
                path: "/"
              });
            })
            .catch(err => {
              if (err.response) {
                this.$message({
                  type: "warning",
                  message: err.response.data.data.message
                });
              }
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" module>
.spacing {
  > div {
    margin-top: 40px;
  }
}
.left {
  border-left: 1px solid #dcdfe6;
  padding: 30px;
}
.checkbox {
  margin-left: 100px;
  font-size: 12px;
}
</style>