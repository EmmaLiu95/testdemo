<template>
	<div class="wrap">
		<div class="title">
			山证企微功能列表
		</div>
		<div class="item">
			<router-link to="business">开户展业</router-link>
		</div>
		<div class="item">
			<router-link to="potential">潜在客户</router-link>
		</div>
		<div class="item">
			<router-link to="userbind">客户绑定</router-link>
		</div>
		<div class="item">
			<router-link to="userinfo">客户全景</router-link>
		</div>
		<div class="item">
			<router-link to="serverecord">服务记录</router-link>
		</div>
		<div class="item">
			<router-link to="stafflist">员工列表</router-link>
		</div>
		<div class="item">
			<router-link to="staffservelist">员工服务记录列表</router-link>
		</div>
		<div class="item">
			<router-link to="recorddetails">员工与客户的服务记录</router-link>
		</div>
		<div class="item">
			<router-link to="test">测试</router-link>
		</div>
		<div class="item">
			<router-link to="message">发送消息</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	mounted(){
	}
}
</script>
<style scoped>
.wrap{
	border:1px solid #d5d5d5;
	border-radius: 4px;
}
.title{
	text-align: center;
	height: 44px;
	line-height: 44px;
	font-weight: bold;
}
.item{
	line-height: 44px;
	height: 44px;
	border-top: 1px solid #d5d5d5;
	padding-left: 10px;
}
a{
	text-decoration: none;
	color: #000;
}
</style>