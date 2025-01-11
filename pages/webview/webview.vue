<template>
	<view class="container">
		<view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="nav-bar">
				<view class="back-btn" @click="goBack">
					<text class="back-icon">〈</text>
				</view>
			</view>
		</view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				statusBarHeight: 0
			}
		},
		onLoad(options) {
			if (options.url) {
				this.url = decodeURIComponent(options.url)
			}
			const sysInfo = uni.getSystemInfoSync();
			this.statusBarHeight = sysInfo.statusBarHeight;
		},
		methods: {
			goBack() {
				uni.navigateBack();
			}
		}
	}
</script>

<style>
page {
	background-color: #000000;
}

.container {
	min-height: 100vh;
	background-color: #000000;
	position: fixed;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.header {
	background: #000000;
	position: fixed;
	width: 100%;
	z-index: 100;
	left: 0;
	top: 0;
}

.nav-bar {
	height: 88rpx;
	display: flex;
	align-items: center;
	position: relative;
}

.back-btn {
	position: absolute;
	left: 0;
	height: 88rpx;
	width: 88rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 101;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 0 8rpx 8rpx 0;
}

.back-icon {
	font-size: 38rpx;
	color: #ffffff;
	font-weight: normal;
	transform: scale(1.3, 1);
}

uni-page-body {
	background-color: #000000;
	position: fixed;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

uni-page-wrapper {
	background-color: #000000;
	position: fixed;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

@media screen and (orientation: landscape) {
	.header {
		width: auto;
		height: 100%;
		max-width: 88rpx;
	}
	
	.nav-bar {
		height: 100%;
	}
	
	.back-btn {
		position: fixed;
		height: 88rpx;
		top: 20rpx;
	}
}
</style> 