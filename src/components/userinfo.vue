<template>
	<div class="wrap">
		<div class="basic">
			<div class="basicwrap">
				<div class="avatar">
					<!-- <img :src="avatar" alt="avatar" class="userimg"> -->
					<img src="../assets/logo.png" alt="" class="userimg">
					<img src="../assets/female.png" alt="" class="usergender">
				</div>
					<div class="info">
						<div class="userprof">
							<span class="username">{{name}}</span>
							<span class="userage">{{age}}岁</span>
						</div>
						<div class="cusinfo">
							<span>客户编号：{{123}}</span>
							<span class="opendate">{{accountOpenTime}}开户</span>
						</div>
						<div class="tagwrap">
							<span class="tags" v-for="(item,index) in tags" :key="index">{{item}}</span>
						</div>
					</div>
			</div>
			<div class="accwrap">
				<div class="accitem">
					<div class="accname">普通资金账号</div>
					<div class="accno">{{ordinaryFundAccounts}}</div>
				</div>
				<div class="midgap"></div>
				<div class="accitem">
					<div class="accname">两融资金账号</div>
					<div class="accno">{{twoFinancingAccount}}</div>
				</div>
			</div>
		</div>
		<div class="assets">
			<div>
				<div class="totaltit">
					<img src="../assets/account.png" alt="" class="totalacc">
					客户总资产
				</div>
				<div class="totalmon">
					{{totalAssets}}
					<span class="unit">元</span>
				</div>
			</div>
			<div class="monsummary">
				<div class="sumitem">
					<div class="itemname">体外资产</div>
					<div>
						{{inVitroAssets}}
						<span class="itemunit">元</span>
					</div>
				</div>
				<div class="itemgap"></div>
				<div class="sumitem">
					<div class="itemname">总负债</div>
					<div>
						{{totalLiability}}
						<span class="itemunit">元</span>
					</div>
				</div>
				<div class="itemgap"></div>
				<div class="sumitem">
					<div class="itemname">总市值</div>
					<div>
						{{totalMarketValue}}
						<span class="itemunit">元</span>
					</div>
				</div>
			</div>
			<div class="monsummary">
				<div class="sumitem">
					<div class="itemname">总资金</div>
					<div>
						{{totalFunds}}
						<span class="itemunit">元</span>
					</div>
				</div>
				<div class="itemgap"></div>
				<div class="sumitem">
					<div class="itemname">理财资产</div>
					<div>
						{{financialAssets}}
						<span class="itemunit">元</span>
					</div>
				</div>
			</div>
			
		</div>
		<div class="mob">
			<a href="tel:400-666-1618">
				<img src="../assets/phone.png" alt="" srcset="" class="dail">
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name:'UserInfo',
	data() {
		return {
			avatar:'',
			name:'',
			age:'',
			accountOpenTime:'',
			tags:[],
			ordinaryFundAccounts:'',
			twoFinancingAccount:'',
			totalAssets:'',
			inVitroAssets:'',
			totalLiability:'',
			totalMarketValue:'',
			totalFunds:'',
			financialAssets:''
		}
	},
	mounted(){
		this.$axios({
			url:'/api/customer/info',
			method:'post'
		}).then((res)=>{
			const data = res.data
			this.avatar = data.avatar
			this.name = data.name
			this.age = data.age
			this.accountOpenTime = data.accountOpenTime
			this.tags = data.tags
			this.ordinaryFundAccounts = data.ordinaryFundAccounts
			this.twoFinancingAccount = data.twoFinancingAccount
			this.totalAssets = data.totalAssets
			this.inVitroAssets = data.inVitroAssets
			this.totalLiability = data.totalLiability
			this.totalMarketValue = data.totalMarketValue
			this.totalFunds = data.totalFunds
			this.financialAssets = data.financialAssets
		})
	}
}
</script>

<style scoped>
.wrap{
	background-color: #F5F5F9;
	height: 100%;
	width: 100%;
	position: absolute;
	overflow-y: auto;
	font-family: 'PingFangSC-Medium, PingFang SC';
}
.basic{
	min-height: 212px;
	background-image: url('../assets/mask.png');
	background-size: cover;
	color: #ffffff;
}
.basicwrap{
	display: flex;
	height: 111px;
	margin: 0 16px;
	border-bottom: 1px solid rgb(255,255,255,0.2);
}
.userimg{
	width: 50px;
	height: 50px;
	margin: 27px 17px 0 12px;
	border-radius: 50%;
}
.usergender{
	width: 18px;
	height: 18px;
	position: absolute;
	left: 64px;
	top: 60px;
}
.info{
	line-height: 1.5;
}
.userprof{
	margin-top: 27px;
}
.username{
	font-size: 18px;
	font-weight: 500;
}
.userage{
	margin-left: 10px;
	font-size: 16px;
	font-weight: 400;
}
.cusinfo{
	font-size: 11px;
	font-weight: 500;
}
.opendate{
	margin-left: 10px;
}
.tagwrap{
	display: flex;
	/* flex-wrap: wrap; */
	word-break: break-all;
}
.tags{
	padding: 2px 5px 2px 22px;
	height: 20px;
	font-size: 10px;
	background-color: #3F55BD;
	border-radius: 11px;
	opacity: 0.81;
	margin-right: 5px;
	background-image:url('../assets/tag.png');
	background-repeat: no-repeat;
	background-position: 8px 7px;
	background-size: 10px 10px;
	word-break: keep-all;
	margin-bottom: 5px;
}
.accwrap{
	display: flex;
	font-size: 10px;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: space-around;
}
.accitem{
	margin-top: 13px;
	text-align: center;
}
.midgap{
	margin-top: 10px;
	border-right: 1px solid rgb(255,255,255,0.2);
}
.assets{
	background-color: #fff;
	border-radius: 8px;
	line-height: 1.5;
	margin: 0 12px;
	position: relative;
	top: -40px;
	padding: 16px;
	word-break: break-all;
}
.totaltit{
	font-weight: 600;
	font-size: 16px;
	display: flex;
	align-items: center;

}
.totalacc{
	display: inline-block;
	width: 18px;
	height: 18px;
	margin-right: 8px;
}
.totalmon{
	font-size: 30px;
	color: #4D75FF;
	line-height: 30px;
	margin-bottom: 25px;
}
.unit{
	font-size: 18px;
}
.monsummary{
	display: flex;
	margin-bottom: 25px;
}
.sumitem{
	width: 33%;
	word-break: break-all;
	padding: 0 20px;
	font-weight: 400;
	font-size: 13px;
	box-sizing: border-box;
}
.itemname{
	color: #919191;
}
.itemunit{
	font-size: 12px;
	color: #414141;
}
.itemgap{
	position: relative;
	top: 20px;
	height: 30px;
	border-right: 1px solid #edecec;
}
.mob{
	position: fixed;
	right: 0;
	bottom: 107px;
	width: 77px;
	height: 49px;
	background: linear-gradient(360deg, #3C37D6 0%, #4D75FF 100%);
	border-radius: 100px 0px 0px 100px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.dail{
	width: 24px;
	height: 24px;
}
</style>