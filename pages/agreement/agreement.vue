<template>
	<view class="container">
		<view class="content">
			<view class="title">用户协议</view>
			<view class="section">
				<view class="section-title">1. 服务条款</view>
				<view class="text">
					欢迎使用伯乐园教育平台。通过访问或使用本平台，即表示您同意接受本协议的所有条款和条件。
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
					本平台的所有内容，包括但不限于文字、图片、音频、视频等均受著作权法和国际著作权条约以及其他知识产权法律法规的保护。
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
	}
}
</script>

<style>
.container {
	padding: 20px;
}

.content {
	background-color: #fff;
	border-radius: 8px;
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
