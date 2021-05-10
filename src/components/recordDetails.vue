<template>
  <div class="container">
    <div class="nav">
      <i class="el-icon-close" @click="goback"></i>
      <h1>员工与客户的服务记录</h1>
      <i class="el-icon-more" @click="goback"></i>
    </div>
    <div class="header">
      <div class="info-bg">
        <div class="avatar">
          <img src="../assets/logo.png" alt="" class="userimg" />
          <img src="../assets/female.png" alt="" class="usergender" />
        </div>
        <div class="info">
          <div class="name">李巧华<span>40岁</span></div>
          <p class="num">客户编号：87654172 &emsp; 2019/12/21开户</p>
          <div class="tag-bg">
            <div class="tag" v-for="(tag, i) in tags" :key="i">
              <img src="../assets/customer_tag.png" /> {{ tag }}
            </div>
          </div>
        </div>
      </div>
      <div class="time">
        <div><img src="../assets/icon_msg.png" /> 服务时间</div>
        <p>2021/03/04 13:40:24-14:00:03</p>
        <hr />
        <div><img src="../assets/icon_circum.png" /> 服务类型</div>
        <p>业务资讯、业务办理</p>
      </div>
    </div>
    <div class="detail-bg">
      <div class="title"><img src="../assets/icon_warning.png" /> 服务详情</div>
      <p>员工1与客户b的聊天记录</p>
      <div class="content">
        客户：你好，请问如何开户？<br />
        员工：请扫描这个二维码开户。[图片] <br />
        客户：好的。
      </div>
      <hr />
      <div class="btn" @click="lookAll">查看全部聊天记录</div>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/icon";
import "element-ui/lib/theme-chalk/icon.css";

export default {
  name: "RecordDetails",
  data() {
    return {
      tags: ["客户标签1", "客户标签2", "客户标签3", "客户标签4"],
    };
  },
  methods: {
    goback: function () {
      this.$router.go(-1);
    },
		lookAll: function (){
			console.log('查看全部聊天记录');
		}
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

.header {
  background-image: url("../assets/mask.png");
  background-size: 100vw 212px;
  background-repeat: no-repeat;
}
.info-bg {
  min-height: 121px;
  display: flex;
}
.avatar {
  margin: 27px 0 auto 28px;
  display: flex;
}
.userimg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.usergender {
  width: 18px;
  height: 18px;
  margin-left: -14px;
  margin-bottom: -1px;
  align-self: flex-end;
}
.info {
  display: flex;
  flex-direction: column;
  margin: 27px 0 0 17px;
}
.name {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 25px;
}
.name span {
  margin-left: 10px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
}
.num {
  margin: 3px 10px 12px 0;
  height: 11px;
  font-size: 11px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.49;
  line-height: 11px;
}
.tag-bg {
  display: flex;
  flex-wrap: wrap;
}
.tag {
  height: 20px;
  background: #3f55bdcd;
  border-radius: 11px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-right: 6px;
  margin-bottom: 6px;
  font-size: 10px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 9px;
}
.tag img {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}

.time {
  background: #ffffff;
  border-radius: 8px;
  margin: 0 12px;
  padding: 19px 16px 16px 16px;
  display: flex;
  flex-direction: column;
}
.time div {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #919191;
  line-height: 14px;
}
.time p {
  margin: 6px 0 0 0;
  margin-left: 28px;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #414141;
  line-height: 14px;
}
.time hr {
  height: 1px;
  background: #f5f5f5;
  border: none;
  margin: 13px 0 17px 0;
}
.time img {
  height: 18px;
  width: 18px;
  margin-right: 10px;
}

.detail-bg {
  background: #ffffff;
  border-radius: 8px;
  margin: 12px;
  padding: 16px 16px 0 16px;
  display: flex;
  flex-direction: column;
}
.detail-bg img {
  height: 18px;
  width: 18px;
  margin-right: 10px;
}
.title {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #919191;
  line-height: 14px;
}
.detail-bg p {
  margin: 8px 0 4px 28px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #414141;
  line-height: 20px;
}
.content {
  margin: 0 0 0 28px ;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #919191;
  line-height: 20px;
}
.detail-bg hr {
  height: 1px;
  background: #f5f5f5;
  border: none;
  margin: 12px 0 0 0;
}

.btn {
  height: 44px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4d75ff;
  line-height: 12px;
}
</style>