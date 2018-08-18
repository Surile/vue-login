<script>
import { userNameValidator, passwordPattern } from "../utils/validator";
import { register } from "../client";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!passwordPattern.test(value)) {
        callback(new Error("长度在8-18之间，区分大小写字母"));
      } else {
        if (this.formData.checkPassword !== "") {
          this.$refs.form.validateField("checkPassword");
        }
        callback();
      }
    };
    const validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        checkPassword: ""
      },
      validator: {
        username: [
          {
            validator: userNameValidator,
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        checkPassword: [
          {
            validator: validateCheckPass,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          delete this.formData.checkPassword;
          register(this.formData)
            .then(() => {
              this.$alert("注册成功", "温馨提示", {
                confirmButtonText: "确定",
                showClose: false,
                callback: () => {
                  this.$router.push("/login");
                }
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
          auto-complete="off" />
      </el-form-item>
      <el-form-item 
        label="邮箱" 
        prop="email">
        <el-input 
          v-model="formData.email" 
          type="email" 
        />
      </el-form-item>
      <el-form-item 
        label="密码" 
        prop="password">
        <el-input 
          v-model="formData.password" 
          type="password" 
          auto-complete="off" />
      </el-form-item>
      <el-form-item 
        label="确认密码" 
        prop="checkPassword">
        <el-input 
          v-model="formData.checkPassword" 
          type="password" 
          auto-complete="off" />
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary" 
          native-type="submit"
        >注册用户</el-button>
      </el-form-item> 
    </el-form>
    <el-col 
      :class="$style.left" 
      :span="10" 
      :push="5">
      已有帐号？
      <router-link to="/login">
        <el-button type="text">立即登录</el-button>
      </router-link>
    </el-col>
  </el-row>
</template>
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
