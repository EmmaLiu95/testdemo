<template>
	<div>
		<div>
			<img src="../assets/register.jpg" alt="">
		</div>
		<div class="item">
			<input type="text" placeholder="请输入资金账号" v-model="account" />
		</div>
		<div class="item">
			<input type="password" placeholder="请输入账号密码" v-model="psw" />
		</div>
		<div class="item">
			<input type="text" placeholder="请输入图形验证码" v-model="verify" />
		</div>
		<div class="item">
			<span class="btn" @click="bindAccount">绑定资金账户</span>
		</div>
	</div>
</template>

<script>
export default {
	name:'Userbind',
	data() {
		return {
			account:'',
			psw:'',
			verify:''
		}
	},
	methods:{
		bindAccount(){
			console.log(this.account)
			console.log(this.psw)
			console.log(this.verify)
		}
	}
}
</script>

<style scoped>
img{
	width: 100%;
}
.item{
	width: 100%;
	margin:10px 0;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
}
input{
	width:100%;
	height: 44px;
	box-sizing: content-box;
	padding-left: 10px;
}
.btn{
	text-align: center;
	display: inline-block;
	width: 95%;
	height: 44px;
	line-height: 44px;
	background-color: #ff0000;
	color: #ffffff;
	border-radius: 4px;
}
</style>