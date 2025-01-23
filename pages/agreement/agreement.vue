<template>
	<view class="container">
		<view class="nav-bar">
			<view class="back-btn" @click="goBack">
				<text class="back-icon">&#xe8ca;</text>
			</view>
			<view class="nav-title">用户协议</view>
		</view>
		<view class="content">
			<view class="section">
				<view class="section-title">1. 服务条款</view>
				<view class="text">
					欢迎使用多元智能思维。通过访问或使用本小程序，即表示您同意接受本协议的所有条款和条件。
				</view>
			</view>
			<view class="section">
				<view class="section-title">2. 用户责任</view>
				<view class="text">
					用户在使用本平台服务时必须遵守中华人民共和国相关法律法规，不得利用本平台进行任何违法或不正当的活动。
				</view>
			</view>
			<view class="section">
				<view class="section-title">3. 知识产权</view>
				<view class="text">
					本小程序的所有内容，包括但不限于文字、图片、音频、视频等均受著作权法和国际著作权条约以及其他知识产权法律法规的保护。
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
</style>
