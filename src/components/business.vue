<template>
	<div class="bgwrap">
		<div class="wrap">
			<div class="head">
				<!-- <img class="logo" src="../assets/logo.png" />
				山西证券 -->
			</div>
			<div class="ava">
				<img src="../assets/logo.png" alt="" srcset="" class="avatar">
			</div>
			<div class="ctn">
				<div class="user">
					<span class="name">{{name}}</span>
					<span class="mob">{{phone}}</span>
				</div>
				<div class="branch">
					深圳蛇口工业七路证券营业部
				</div>
				<div class="qr">
					<img :src="imgSrc" alt="" srcset="">
				</div>
			</div>
			<div class="tip">
				<div>扫描二维码，便捷开户</div>
				<div>长按二维码转发</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
		return {
			name:'',
			phone:'',
			imgSrc:''
		}
	},
	mounted(){
		this.$axios({
			url:'/api/account/code'
		}).then((res)=>{
			this.imgSrc='data:image/png;base64,'+res.data.codeBase64
			this.name=res.data.name
			this.phone=res.data.phone
		})
	}
}
</script>
<style scoped>
.bgwrap{
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	font-family: 'PingFangSC-Medium, PingFang SC';
}
.wrap{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 290px;
	height: 443px;
	border:1px solid #c4c4c4;
	border-radius: 8px;
	background: #ffffff;
}
.head{
	height: 72px;
	/* padding: 15px;
	background-color: #e2fbfb;
	font-size: 13px;
	font-weight: 400;
	color: #414141;
	line-height: 13px;
	text-shadow: 0px 2px 13px rgba(161, 183, 215, 0.5); */
	background: url('../assets/cardbg.png')0 0 no-repeat;
	background-size: 100% 72px;
	box-sizing: border-box;
	border-radius: 8px 8px 0px 0px;
}
/* .head img{
    position: relative;
	top: 4px;
} */
.logo{
	width:15px;
	height: 15px;
}
.avatar{
	position: absolute;
	left: 113px;
	top: 33px;
	width: 62px;
	height: 62px;
	border-radius: 50%;
}
.ctn{
	padding-top: 8px;
}
.user{
	text-align: center;
	margin: 20px 0 0 0;
	font-weight: bold;
}
.branch{
	text-align: center;
	font-size: 13px;
	font-family: 'PingFangSC-Regular, PingFang SC';
	font-weight: 400;
	color: #414141;
	line-height: 18px;
	text-shadow: 0px 2px 13px rgba(161, 183, 215, 0.5);
}
.mob{
	margin-left: 10px;
}
.qr{
	display: flex;
	height: 225px;
	align-items: center;
	justify-content: center;
	background: url('../assets/qrwrap.png');
	background-repeat: no-repeat;
	background-size: 245px 245px;
	background-position: 21px -7px;
}
.qr img{
	width: 190px;
	height: 190px;
}
.tip{
	/* margin: 20px 0; */
	text-align: center;
	color: #c4c4c4;
	font-size: 14px;

}
</style>