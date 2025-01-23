<template>
	<view class="container">
		<view class="nav-bar">
			<view class="back-btn" @click="goBack">
				<text class="back-icon">&#xe8ca;</text>
			</view>
			<view class="nav-title">隐私政策</view>
		</view>
		<view class="content">
			<view class="section">
				<view class="section-title">1. 信息收集</view>
				<view class="text">
					根据法律规定，开发者仅处理实现小程序功能所必要的信息。为了注册、登录小程序，开发者收集你的用户信息（微信昵称、头像、性别、地区）。
				</view>
			</view>
			<view class="section">
				<view class="section-title">2. 你的权益</view>
				<view class="text">
					开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。<br />
					关于多元智能思维，你可以通过以下路径：小程序主页右上角“…”—“设置”—点击特定信息—点击“不允许”，撤回对开发者的授权。<br />
					关于你的个人信息，你可以通过以下方式与开发者联系，行使查阅、复制、更正、删除等法定权利。<br />
					邮箱： xuezhen00@163.com
				</view>
			</view>
			<view class="section">
				<view class="section-title">3. 开发者对信息的存储</view>
				<view class="text">
					开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。
				</view>
			</view>
			<view class="section">
				<view class="section-title">4. 信息的使用规则</view>
				<view class="text">
					开发者将会在本指引所明示的用途内使用收集的信息 <br />
					如开发者使用你的信息超出本指引目的或合理范围，开发者必须在变更使用目的或范围前，再次以xxx方式告知并征得你的明示同意。
				</view>
			</view>
			<view class="section">
				<view class="section-title">5. 信息对外提供</view>
				<view class="text">
					开发者承诺，不会主动共享或转让你的信息至任何第三方，如存在确需共享或转让时，开发者应当直接征得或确认第三方征得你的单独同意。 <br />
					开发者承诺，不会对外公开披露你的信息，如必须公开披露时，开发者应当向你告知公开披露的目的、披露信息的类型及可能涉及的信息，并征得你的单独同意。<br />
				</view>
			</view>
			<view class="section">
				<view class="text">
					你认为开发者未遵守上述约定，或有其他的投诉建议、或未成年人个人信息保护相关问题，可通过以下方式与开发者联系；或者向微信进行投诉。 <br />
					邮箱： xuezhen00@163.com
				</view>
			</view>
			<view class="section dates">
				<view class="text">
					更新日期：2025-01-23<br />
					生效日期：2025-01-23
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	methods: {
		goBack() {
			uni.navigateBack();
		}
	}
}
</script>

<style>
.container {
	padding: 0;
}

.nav-bar {
	position: relative;
	display: flex;
	align-items: center;
	height: 44px;
	background-color: #fff;
	padding: 0 10px;
	border-bottom: 1px solid #eee;
}

.back-btn {
	position: absolute;
	left: 10px;
	padding: 5px 10px;
}

.back-icon {
	font-family: "iconfont";
	font-size: 20px;
	color: #333;
}

.nav-title {
	width: 100%;
	text-align: center;
	font-size: 18px;
	font-weight: 500;
}

.content {
	background-color: #fff;
	padding: 15px;
}

.title {
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 20px;
}

.section {
	margin-bottom: 20px;
}

.section-title {
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 10px;
}

.text {
	font-size: 14px;
	line-height: 1.6;
	color: #333;
}

.dates {
	text-align: right;
	margin-top: 40rpx;
}
</style>
