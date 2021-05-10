<template>
	<div>
		<el-button @click="msgFunc">message</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nonceStr:'',
			signature:'',
			timestamp:''
		}	
	},
	methods:{
		configFunc(){
			wx.config({
				beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
				debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: 'ww879f7e3afc7d2b33', // 必填，企业微信的corpID
				timestamp: this.timestamp, // 必填，生成签名的时间戳
				nonceStr: this.nonceStr, // 必填，生成签名的随机串
				signature: this.signature,// 必填，签名，见 附录-JS-SDK使用权限签名算法
				jsApiList: ['sendChatMessage'] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
			})
			wx.agentConfig({
				corpid: 'ww879f7e3afc7d2b33', // 必填，企业微信的corpid，必须与当前登录的企业一致
				agentid: '1000017', // 必填，企业微信的应用id （e.g. 1000247）
				timestamp: this.timestamp, // 必填，生成签名的时间戳
				nonceStr: this.nonceStr, // 必填，生成签名的随机串
				signature: this.signature,// 必填，签名，见附录-JS-SDK使用权限签名算法
				jsApiList: ['sendChatMessage'], //必填，传入需要使用的接口名称
				success: function(res) {
					// 回调
					console.log('agent config==================')
					console.log(res)
				},
				fail: function(res) {
						if(res.errMsg.indexOf('function not exist') > -1){
								alert('版本过低请升级')
						}
				}
			});
		},
		msgFunc(){
			console.log('send======================')
			wx.invoke('sendChatMessage', {
				msgtype:"news", //消息类型，必填
				news: {
					link: "https://jfhd.i618.com.cn:8602/wxgzh/#/userResult", //H5消息页面url 必填
					title: "绑定山西证券官微奖励888积分", //H5消息标题
					desc: "开启官微消息提醒 让陪伴为冬日加温现在绑定账号还送888积分，攒积分兑年末好礼！", //H5消息摘要
					imgUrl: "http://msg-test.i618.com.cn/shareicon/zhbd.png", //H5消息封面图片URL
				}
			}, function(res) {
				console.log('sendChatMessage Result=====================')
				console.log(res)
					if (res.err_msg == 'sendChatMessage:ok') {
							//发送成功
					}
			})
		},
		queryTicket(){
			const url=location.href
			this.$axios({
				url:`http://120.55.85.63:8090/wecom/ticket/getAgentTicket?url=${url}&corpId=ww879f7e3afc7d2b33&secret=K3orZLlu8jKSDciZbHYo1qlE-pPW7c3af2ffG0TqxNQ&agentId=1000017`,
				method:'get',
				async:false
			}).then((res)=>{
				console.log("ali yun==================")
				console.log(res)
				this.timestamp=res.data.timestamp
				this.nonceStr=res.data.nonceStr
				this.signature=res.data.signature
				this.configFunc()
			})
		}
	},
	mounted(){
		this.queryTicket()

		wx.ready(function(){
			console.log('wx ready==========================')
			wx.checkJsApi({
				jsApiList: ['sendChatMessage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
				success: function(res) {
					console.log("checkJSAPI==================")
					console.log(res)
					// 以键值对的形式返回，可用的api值true，不可用为false
					// 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
				},
				error:function(res){
					console.log(res)
				}
			});
			// wx.invoke('getContext', {
			// 	}, function(res){
			// 		console.log('getContext======================')
			// 		console.log(res)
			// 	if(res.err_msg == "getContext:ok"){
			// 		entry  = res.entry ; //返回进入H5页面的入口类型，目前有normal、contact_profile、single_chat_tools、group_chat_tools、chat_attachment
			// 	}else {
			// 		//错误处理
			// 	}
			// });
		});

		
	}
}
</script>

<style lang="scss" scoped>

</style>