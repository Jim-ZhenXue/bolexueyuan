<template>
	<view class="container">
		<view class="top-area" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="header">
				<image class="logo" src="/static/images/伯乐园商标.png" mode="heightFit"></image>
				<text class="title">多元思维</text>
			</view>
		</view>
		<scroll-view class="scroll-container" scroll-y>
			<view class="image-list">
				<view v-for="(item, index) in items" :key="index" 
					class="image-item" 
					@click="openWebView(item.url)">
					<image :src="item.image" mode="aspectFill" class="item-image"></image>
				</view>
			</view>
		</scroll-view>
		<view class="copyright">
			© 2024 LinkCareer. All rights reserved
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0,
				items: [
					{
						url: 'https://mobilejiaoderenshi.netlify.app',
						image: '/static/images/角的认识.jpg'
					},
					{
						url: 'https://sanjiaoxingderenshi.netlify.app',
						image: '/static/images/三角形的认识.jpg'
					},
					{
						url: 'https://mobiledianxiansiwei.netlify.app',
						image: '/static/images/点线思维.jpg'
					},
					{
						url: 'https://sibianxingderenshi.netlify.app',
						image: '/static/images/四边形的认识.jpg'
					},
					{
						url: 'https://xianjiaomiansiwei.netlify.app',
						image: '/static/images/线角面思维.jpg'
					}
				]
			}
		},
		onLoad() {
			const sysInfo = uni.getSystemInfoSync();
			this.statusBarHeight = sysInfo.statusBarHeight;
		},
		methods: {
			openWebView(url) {
				uni.navigateTo({
					url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
				})
			}
		}
	}
</script>

<style>
	page {
		background: #4CAF50;
		height: 100%;
		overflow: hidden;
	}
	
	.container {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: #4CAF50;
		overflow: hidden;
	}

	.top-area {
		background: #51d168;
	}

	.header {
		width: 100%;
		height: 88rpx;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		background: #49cb4e;
		/* box-shadow: 0 2rpx 10rpx rgba(73, 198, 111, 0.05); */
	}

	.logo {
		height: 56rpx;
		width: 56rpx;
		margin-right: 16rpx;
	}

	.title {
		font-size: 36rpx;
		font-weight: 600;
		color: #333333;
	}

	.scroll-container {
		flex: 1;
		width: 100%;
		background: #4CAF50;
		overflow: hidden;
	}

	.image-list {
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		gap: 30rpx;
		padding-bottom: 100rpx;
	}

	.image-item {
		width: 100%;
		height: 360rpx;
		border-radius: 24rpx;
		overflow: hidden;
		box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.1);
	}

	.item-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.copyright {
		position: fixed;
		bottom: 20rpx;
		right: 20rpx;
		text-align: right;
		padding: 2rpx 10rpx;
		color: rgba(255, 255, 255, 0.6);
		font-size: 20rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		min-width: 120rpx;
		background: none;
		border: none;
		box-shadow: none;
	}
</style>
