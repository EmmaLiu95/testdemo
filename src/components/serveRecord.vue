<template>
  <div class="container">
    <div class="nav">
      <i class="el-icon-close" @click="goback"></i>
      <h1>服务记录</h1>
      <i class="el-icon-more" @click="goback"></i>
    </div>
    <div class="customer">
      <img src="../assets/logo.png" alt="" />
      <div class="info">
        <h1>客户姓名：李巧华</h1>
        <h2>客户编号：1238978701</h2>
      </div>
    </div>
    <div class="type" v-if="!isAuto">
      <p>服务类型：</p>
      <div>
        <div
          class="item"
          :class="{ active: operationTypeIndex === i }"
          @click="makeActive(i)"
          v-for="(type, i) in serveType"
          :key="i"
        >
          {{ type }}
        </div>
      </div>
    </div>
    <div class="record" v-if="!isAuto">
      <div class="tile" v-on:click="clickArrow">
        <p>聊天记录选择：</p>
        <img src="../assets/arrow_down.png" alt="" />
      </div>
      <div class="content" v-if="isShowRecord">
        <ul>
          <li v-for="(type, i) in serveType" :key="i">
            <div class="item">
              <i
                v-if="isSelect"
                class="el-icon-success"
                style="color: #4d75ff"
                @click="check"
              ></i>
              <i v-else class="el-icon-circle-check" @click="check"></i>
              <h3>2021/04/14 9:11</h3>
              <h1>李巧华</h1>
              <h2>{{ type }}</h2>
              <hr />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="auto-switch">
      <p>自动生成服务记录</p>
      <img
        @click="autoSwitch"
        :src="
          isAuto === true
            ? require('../assets/logo.png')
            : require('../assets/switch_off.png')
        "
      />
    </div>
    <p>
      打开【自动生成服务记录】模式，系统将在每日24点将您当日服务客户的聊天记录自动归档生成服务记录。
    </p>
    <p v-if="isAuto">
      格式：<br />
      服务类型：业务咨询<br />
      服务摘要：客户姓名-日期-企业微信服务记录<br />
      记录内容：当日聊天记录全文。<br />
    </p>
    <div class="btn" v-on:click="submit" v-if="!isAuto">提交</div>
    <div style="height: 65px"></div>
  </div>
</template>

<script>
import "element-ui/lib/icon";
import "element-ui/lib/theme-chalk/icon.css";

export default {
  name: "ServeRecord",
  data() {
    return {
      serveType: [
        "业务咨询",
        "业务办理",
        "投资建议",
        "回访",
        "产品推荐",
        "其他",
      ],
      isShowRecord: false,
      isAuto: false,
      isSelect: false,
      operationTypeIndex: "",
    };
  },
  methods: {
    makeActive: function (index) {
      // 模型改变，视图会自动更新
      this.operationTypeIndex = index;
    },
    clickArrow: function () {
      console.log("点击了绑定按钮");
      this.isShowRecord = !this.isShowRecord;
    },
    goback: function () {
      this.$router.go(-1);
    },
    submit: function () {
      if (this.operationTypeIndex === "") {
        alert("请选择服务类型");
      }
      console.log("提交");
    },
    autoSwitch: function () {
      console.log("点击了开关");
      this.isAuto = !this.isAuto;
    },
    check: function () {
      this.isSelect = !this.isSelect;
    },
  },
};
</script>

<style scoped>
.container {
  background: #f6f7fb;
  height: 100vh;
}

i {
  margin: auto 12px;
}

.nav {
  height: 44px;
  display: flex;
  margin: auto;
  background-color: white;
  justify-content: space-between;
}
.nav h1 {
  margin: 0;
  height: 44px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 44px;
}
.customer {
  background-color: white;
  display: flex;
  padding: 18px 16px;
  margin-bottom: 10px;
}
.customer img {
  height: 44px;
  width: 44px;
  border-radius: 22px;
  margin: 0 16px 0 0;
}
.customer .info {
  height: 44px;
  display: flex;
  flex-direction: column;
}
.customer .info h1 {
  margin: 0;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #414141;
  line-height: 22px;
}
.customer .info h2 {
  margin: 7px 0 0 0;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #777777;
  line-height: 14px;
}

.type {
  background-color: white;
  flex-direction: column;
  padding: 9px 11px 11px 11px;
}
.type p {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #919191;
  line-height: 20px;
  margin: 5px;
}
.type div {
  display: flex;
  flex-wrap: wrap;
}
.type div .item {
  flex: 0 0 30.1%;
  height: 38px;
  background: #edf3ff;
  border-radius: 19px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #6677b2;
  justify-content: center;
  align-content: center;
  margin: 7px 5px;
}
.type div .item.active {
  background: #4d75ff;
  color: white;
}

.record {
  display: flex;
  flex-direction: column;
  padding: 18px 16px;
  margin: 10px 0;
  background: #ffffff;
}
.record .tile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.record .tile p {
  height: 21px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #414141;
  line-height: 21px;
  margin: auto 0;
}
.record .tile img {
  width: 12px;
  height: 8px;
  margin: auto 0;
}
.record .content {
  margin: 14px 0 4px 0;
  height: 268px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  overflow-y: scroll;
}
.record .content ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.record .content ul li {
  margin: auto 0;
  list-style: none;
  border: none;
}
.record .content .item {
  margin: 0;
  padding: 0;
  height: 66px;
  position: relative;
}
.record .content .item i {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 16px;
  top: 25px;
  margin: 0;
}
.record .content .item h3 {
  position: absolute;
  left: 54px;
  top: 14px;
  height: 10px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #aaaaaa;
  line-height: 10px;
  margin: 0;
}
.record .content .item h1 {
  position: absolute;
  left: 54px;
  bottom: 14px;
  width: 60px;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 14px;
  margin: 0;
}
.record .content .item h2 {
  position: absolute;
  left: 113px;
  bottom: 14px;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #777777;
  line-height: 14px;
  margin: 0;
}
.record .content .item hr {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 0;
  height: 1px;
  background: #f6f6f6;
  border: none;
  margin: 0;
}

.auto-switch {
  display: flex;
  padding: 0 16px;
  height: 54px;
  background: #ffffff;
  justify-content: space-between;
  align-content: center;
}
.auto-switch p {
  height: 21px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #414141;
  line-height: 21px;
  margin: auto 0;
}
.auto-switch img {
  width: 56px;
  height: 32px;
  margin: auto 0;
}

p {
  margin: 12px 16px 0 16px;
  height: 40px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a7a7a7;
  line-height: 17px;
}

.btn {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 15px;
  height: 48px;
  background: linear-gradient(180deg, #4d75ff 0%, #4d75ff 100%);
  border-radius: 27px;
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 48px;
}
</style>