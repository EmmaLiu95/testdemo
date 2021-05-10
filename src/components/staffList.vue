<template>
  <div class="container">
    <div class="nav">
      <i class="el-icon-close" @click="goback"></i>
      <h1>员工列表</h1>
      <i class="el-icon-more" @click="goback"></i>
    </div>
    <div class="tab">
      <div
        class="item"
        :class="{ active: operationTabIndex === i }"
        @click="makeActive(i)"
        v-for="(tab, i) in tabs"
        :key="i"
      >
        {{ tab }}
        <div class="indicate" v-if="operationTabIndex === i"></div>
      </div>
    </div>
    <div class="title">上海分公司营业部员工服务记录</div>
    <div class="list">
      <ul>
        <li>
          <div class="category">
            <h1 class="h1-1">员工姓名</h1>
            <h1 class="h1-2">服务次数</h1>
          </div>
        </li>
        <li v-for="(staff, i) in staffs" :key="i">
          <div class="item" @click="selectedItem">
            <img
              v-if="i < 3"
              class="medal"
              :src="require('../assets/medal_' + (i + 1) + '.png')"
            />
            <h1 v-else>{{ i + 1 }}</h1>
            <h2>{{ staff.name }}</h2>
            <div class="spacer"></div>
            <h3>{{ staff.count }}</h3>
            <img class="arrow" src="../assets/arrow_right.png" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/icon";
import "element-ui/lib/theme-chalk/icon.css";

export default {
  name: "StaffList",
  data() {
    return {
      tabs: ["近一周", "近一个月", "近三个月"],
      staffs: [
        { name: "西晋一", count: "100" },
        { name: "罗家门", count: "90" },
        { name: "罗宇航", count: "80" },
        { name: "林峰", count: "70" },
        { name: "李心艾", count: "60" },
        { name: "张三丰", count: "50" },
        { name: "西晋一一", count: "40" },
        { name: "罗", count: "30" },
        { name: "关关", count: "20" },
        { name: "林", count: "10" },
        { name: "李四", count: "6" },
        { name: "张三", count: "5" },
      ],
      operationTabIndex: 1,
    };
  },
  methods: {
    goback: function () {
      this.$router.go(-1);
    },
    makeActive: function (index) {
      // 模型改变，视图会自动更新
      this.operationTabIndex = index;
    },
    selectedItem: function () {
      console.log("跳转到服务记录列表页面");
      this.$router.history.push('/staffservelist');
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

.tab {
  background-color: white;
  display: flex;
  height: 50px;
  margin-bottom: 14px;
}

.tab .item {
  flex: 0 0 33.3%;
  height: 50;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  display: flex;
  flex-direction: column;
}
.tab .item.active {
  font-size: 18px;
  font-weight: 500;
  color: #414141;
}
.indicate {
  width: 20px;
  height: 3px;
  background: #4d75ff;
  border-radius: 2px;
  align-self: center;
  margin-top: -5px;
}

.title {
  margin: 0 16px;
  background-image: url("../assets/title_bg.png");
  background-size: cover;
  border-radius: 10px 10px 0 0;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #4d75ff;
}

.category {
  height: 44px;
  background: white;
  margin: 0;
  display: flex;
  justify-content: space-between;
}

.category h1 {
  height: 44px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #919191;
  line-height: 44px;
}
.h1-1 {
  margin: 0 0 0 115px;
}
.h1-2 {
  margin: 0 40px 0 0;
}

.list {
  background: white;
  margin: 0 16px 52px 16px;
  border-radius: 0 0 10px 10px;
  max-height: calc(100vh - 220px);
  overflow-y: scroll;
}
ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
ul li {
  margin: auto 0;
  list-style: none;
  border: none;
}
.list .item {
  height: 56px;
  display: flex;
  border-radius: 0 0 10px 10px;
  align-items: center;
}
.list .item .medal {
  height: 30px;
  width: 34px;
  margin: 13px 30px;
}
.list .item h1 {
  width: 34px;
  margin: 0 30px;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #262626;
  text-align: center;
}
.list .item h2 {
  margin: 0;
  width: 94px;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #414141;
}
.list .item h3 {
  margin: 0;
  width: 30px;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #414141;
}
.spacer {
  width: calc(100vw - 297px);
}
.list .item .arrow {
  height: 12px;
  width: 8px;
  margin: 0 13px 0 26px;
}
</style>