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
	border-bottom: 1px solid rgba(76, 175, 80, 0.3);
}

.back-button {
	padding: 5px 10px;
}

.back-icon {
	font-size: 24px;
	color: #4CAF50;
	transition: color 0.3s ease;
}

.back-button:active .back-icon {
	color: #2196F3;
}

.page-title {
	flex: 1;
	text-align: center;
	font-size: 18px;
	margin-right: 40px;
	background: linear-gradient(45deg, #4CAF50, #2196F3);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: bold;
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
	border-radius: 15px;
	box-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
}

.info-title {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 15px;
	background: linear-gradient(45deg, #4CAF50, #2196F3);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
}

.info-text {
	font-size: 16px;
	line-height: 1.6;
	color: #E0E0E0;
	text-align: center;
	padding: 15px;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 10px;
	border: 1px solid rgba(76, 175, 80, 0.2);
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