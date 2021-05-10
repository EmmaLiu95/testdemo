<template>
  <div>
    <div class="nav">
      <i class="el-icon-close" @click="goback"></i>
      <a>账户绑定</a>
    </div>
    <img src="../assets/register.jpg" alt="">
    <div class="input-tile">
      <i class="el-icon-s-custom"></i>
      <!-- <div>{{ accountType }} <span>切换账号</span></div> -->
      <select v-model="accountType" name="">
        <option value="交易账号">交易账号</option>
        <option value="普通交易账号">普通交易账号</option>
      </select>
    </div>
    <hr />
    <div class="input-tile">
      <i class="el-icon-user"></i>
      <input
        class="login-input"
        type="text"
        v-model="useraccount"
        placeholder="请输入资金账号"
      />
    </div>
    <hr />
    <div class="input-tile">
      <i class="el-icon-lock"></i>
      <input
        class="login-input"
        type="text"
        v-model="pwd"
        placeholder="请输入账号密码"
      />
    </div>
    <hr />
    <div class="input-tile">
      <i class="el-icon-film"></i>
      <input
        class="login-input"
        type="text"
        v-model="verification"
        placeholder="请输入图形验证码"
      />
    </div>
    <hr />
    <div class="btn" v-on:click="bindAccount">绑定资金账户</div>
  </div>
</template>

<script>
import "element-ui/lib/icon";
import "element-ui/lib/theme-chalk/icon.css";

export default {
  name: "Test",
  data() {
    return {
      accountType: "普通交易账号",
      useraccount: "",
      pwd: "",
      verification: "",
    };
  },
  methods: {
    bindAccount: function () {
      console.log("点击了绑定按钮");
    },
    goback: function () {
      this.$router.go(-1);
    }
  },
};
</script>

<style scoped>

i{
  margin: 0 12px;
}

img{
  width: 100%;
}

span {
  margin: 0 20px;
}
.nav {
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
}
.input-tile {
  display: flex;
  width: 100%;
  height: 40px;
  padding: 0;
  align-items: center;
}
.input-tile input {
  border: 0px;
  outline: none;
}

select,select select{
  border: none;
  outline: none;
  width: 100%;
  margin-right: 12px;
}

hr {
  background-color: lightgrey;
  border: none;
  height: 1px;
  margin-left: 12px;
}

.btn {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 2px;
  background-color: red;
  height: 40px;
  color: white;
  width: auto;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
}
</style>