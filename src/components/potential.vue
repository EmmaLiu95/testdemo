<template>
	<div class="wrap">
		<div class="content">
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<div class="item">
						<div class='basic-message'>
							<h1>{{item.name}}</h1>
							<h2>{{item.id}}</h2>
							<img 
								:src="
									item.gender === 'male'
										? require('../assets/potentialMale.png')
										: require('../assets/potentialFemale.png')
							"/>
							<p>{{item.age + "岁"}}</p>
						</div>
						<hr />
						<div class='other-message'>
							<h1>总资产：</h1>
							<p>{{item.assets}}</p>
							<h2>
								最近服务日期：{{item.date}}
							</h2>
						</div>
					</div>
				</li>
			</ul>
		</div>	
	</div>
</template>

<script>
export default {
	name:'Potential',
	data() {
		return {
			list:[]
		}
	},
	mounted(){
		// this.$axios({
		// 	url:'/api/customer/potential/list'
		// }).then((res)=>{
		// 	this.list=res.data
		// })
		const res={
			code:0,
			msg:"成功",
			data:[
				{
					id:"12345678",
					name:"张三",
					assets:"8213381.00",
					age:'33',
					date:'2020/01/01',
					gender:'male'
				},
				{
					id:"12345680",
					name:"王五",
					assets:"8234231.00",
					age:'18',
					date:'2020/01/01',
					gender:'male'
				},
				{
					id:"12345679",
					name:"李四",
					assets:"1231243.00",
					age:'25',
					date:'2021/04/21',
					gender:'female'
				}
			]
		}
		this.list=res.data
	}
}
</script>

<style scoped>
/* .title{
	margin-bottom: 20px;
} */
.wrap{
	background-color: #F6F7FB;
	height: 100vh;
}
.content ul{
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
}
.content ul li{
	margin: 12px 10px 0 10px;
	list-style: none;
	/* width: 355px; */
	height: 120px;
	background-color: #FFF;
	border-radius: 8px;
}
.content .item{
	position: relative;
}
.content .item .basic-message{
	display: flex;
	flex-direction: row;
}
.content .item .basic-message h1{
	position: absolute;
	left: 16px;
	margin: 10px 0 0 0;
	width: 31px;
	height: 21px;
	font-size: 15px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #414141;
	line-height: 21px;
}
.content .item .basic-message h2{
	position: absolute;
	left: 57px;
	margin: 13px 0 0 0;
	width: 72px;
	height: 15px;
	font-size: 15px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #414141;
	line-height: 15px;
}
.content .item .basic-message img{
	position: absolute;
	left: 138px;
	margin: 13px 0 0 0;
	width: 16px;
	height: 16px;
}
.content .item .basic-message p{
	position: absolute;
	left: 166px;
	margin: 13px 0 0 0;
	width: 33px;
	height: 15px;
	font-size: 15px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #414141;
	line-height: 15px;
}
.content .item hr{
	position: absolute;
	left: 16px;
	right: 16px;
	top: 38px;
	bottom: 81px;
	height: 0.5px;
	border: none;
	background: #EEEEEE;
}
.content .item .other-message{
  display: flex;
	flex-direction:column;
}
.content .item .other-message h1{
	position: absolute;
	margin: 54px 0 0 17px;
	width: 56px;
	height: 14px;
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #919191;
	line-height: 14px;
}
.content .item .other-message P{
	position: absolute;
	margin: 51px 0 0 71px;
	width: 84px;
	height: 20px;
	font-size: 14px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #414141;
	line-height: 20px;
}
.content .item .other-message h2{
	position: absolute;
	margin: 87px 0 0 16px;
	width: 166px;
	height: 13px;
	font-size: 13px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #919191;
	line-height: 13px;
}
</style>