<template>
	<view class="info-container" style="background: #000000;">
		<view class="top-bar" :style="{ paddingTop: statusBarHeight + 'px', background: '#000000' }">
			<view class="back-button" @click="goBack">
				<text class="back-icon">←</text>
			</view>
			<text class="page-title">详细信息</text>
		</view>
		<view class="content">
			<image :src="info.image" mode="aspectFit" class="info-image"></image>
			<text class="info-title">{{info.title}}</text>
			<text class="info-text">{{info.info}}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: 0,
			info: {
				title: '',
				info: '',
				image: ''
			}
		}
	},
	onLoad(options) {
		const sysInfo = uni.getSystemInfoSync();
		this.statusBarHeight = sysInfo.statusBarHeight;
		
		if (options.info) {
			this.info = JSON.parse(decodeURIComponent(options.info));
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
.info-container {
	flex: 1;
	background-color: #000000;
	min-height: 100vh;
}

.top-bar {
	background-color: #000000;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #333;
}

.back-button {
	padding: 5px 10px;
}

.back-icon {
	font-size: 24px;
	color: #ffffff;
}

.page-title {
	flex: 1;
	text-align: center;
	font-size: 18px;
	margin-right: 40px;
	color: #ffffff;
}

.content {
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #000000;
}

.info-image {
	width: 120px;
	height: 120px;
	margin-bottom: 20px;
}

.info-title {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 15px;
	color: #ffffff;
}

.info-text {
	font-size: 16px;
	line-height: 1.6;
	color: #cccccc;
	text-align: center;
}

page {
	background: #000000;
	min-height: 100vh;
}

.container {
	background: #000000;
	min-height: 100vh;
}
</style> 