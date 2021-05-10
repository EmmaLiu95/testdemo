<template>
  <div class="container">
    <div class="nav">
      <i class="el-icon-close" @click="goback"></i>
      <h1>员工服务记录列表</h1>
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
    <div class="list">
      <ul>
        <li v-for="(content, i) in contents" :key="i">
          <div class="item" @click="selectedItem">
            <div class="customer">
              <h1>{{ content.customer }}</h1>
              <h2>{{ content.number }}</h2>
              <div class="type">{{ matchType(content.type) }}</div>
            </div>
            <hr />
            <h3>{{ content.time }}</h3>
            <p>{{ content.msg }}</p>
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
  name: "StaffServeList",
  data() {
    return {
      tabs: ["近一周", "近一个月", "近三个月"],
      operationTabIndex: 1,
      contents: [
        {
          customer: "客户1",
          msg:
            "与客户沟通市场行情，提示客户注意市场风险，可以考虑购买固定收益产品",
          type: 1,
          number: "30062607",
          time: "2020/10/04  17:28:00",
        },
        {
          customer: "客户2",
          msg: "资金不够，记得补足资金，通知客户讲课",
          type: 2,
          number: "30062607",
          time: "2020/10/04  17:28:00",
        },
        {
          customer: "客户3",
          msg:
            "资金不够，记得补足资金，通知客户讲课资金不够，记得补足资金，通知客户讲课资金不够，记得补足资金，通知客户讲课资金不够，记得补足资金，通知客户讲课",
          type: 3,
          number: "30062607",
          time: "2020/10/04  17:28:00",
        },
        {
          customer: "客户4",
          msg: "嗨",
          type: 4,
          number: "30062607",
          time: "2020/10/04  17:28:00",
        },
        {
          customer: "客户5",
          msg: "干啥嘞",
          type: 5,
          number: "30062607",
          time: "2020/10/04  17:28:00",
        },
        {
          customer: "客户6",
          msg: "我要赚钱",
          type: 6,
          number: "30062607",
          time: "2020/10/04  17:28:00",
        },
      ],
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
      console.log("跳转到服务详情页面");
      this.$router.history.push('/recorddetails');
    },
    matchType: function (type) {
      let str = "";
      switch (type) {
        case 1:
          str = "业务咨询";
          break;
        case 2:
          str = "业务办理";
          break;
        case 3:
          str = "投资建议";
          break;
        case 4:
          str = "回访";
          break;
        case 5:
          str = "产品推荐";
          break;
        case 6:
          str = "其他";
          break;
        default:
          break;
      }
      return str;
    },
  },
};

export function matchType(type) {
  let str = "";
  switch (type) {
    case 1:
      str = "业务咨询";
      break;
    case 2:
      str = "业务办理";
      break;
    case 3:
      str = "投资建议";
      break;
    case 4:
      str = "回访";
      break;
    case 5:
      str = "产品推荐";
      break;
    case 6:
      str = "其他";
      break;
    default:
      break;
  }
  return str;
}
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
  margin-bottom: 12px;
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

.list {
  margin: 0;
  max-height: calc(100vh - 106px);
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
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 0 16px 20px 16px;
  margin: 0 10px 12px 10px;
}
.customer {
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
}
.customer h1 {
  height: 21px;
  font-size: 15px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #414141;
  line-height: 21px;
  text-align: center;
}
.customer h2 {
  margin-left: 10px;
  text-align: center;
  height: 15px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #414141;
  line-height: 15px;
}
.type {
  position: absolute;
  right: 0;
  display: flex;
  height: 24px;
  width: 72px;
  background: #edf3ff;
  border-radius: 12px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4d75ff;
  justify-content: center;
  align-items: center;
}

.list .item h3 {
  margin: 12px 0;
  height: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4d75ff;
  line-height: 14px;
}
.list .item p {
  margin: 0;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #919191;
  line-height: 20px;
}
.list .item hr {
  height: 1px;
  background: #eeeeee;
  border: none;
  margin: 0;
}
</style>