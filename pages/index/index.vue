<template>
	<view class="container">
		<view class="top-area" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="header">
				<view class="title-container" @click="navigateToCopyright">
					<image class="logo" src="/static/images/伯乐园商标.png" mode="heightFit"></image>
					<text class="title">多元思维</text>
				</view>
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
			},
			navigateToCopyright() {
				uni.navigateTo({
					url: '/pages/copyright/copyright'
				})
			}
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
		height: 100%;
		overflow: hidden;
	}
	
	.container {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		overflow: hidden;
	}

	.top-area {
		background: #FFFFFF;
	}

	.header {
		width: 100%;
		height: 88rpx;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		background: #FFFFFF;
	}

	.title-container {
		display: flex;
		align-items: center;
		background: linear-gradient(135deg, #FF2442, #FF1E6E);
		padding: 6rpx 24rpx 6rpx 6rpx;
		border-radius: 28rpx;
		box-shadow: 0 2px 8px rgba(255, 36, 66, 0.3);
	}

	.logo {
		height: 44rpx;
		width: 44rpx;
		margin-right: 8rpx;
	}

	.title {
		font-size: 32rpx;
		font-weight: 500;
		color: #FFFFFF;
		font-family: -apple-system-font, "PingFang SC", "Microsoft YaHei", sans-serif;
		letter-spacing: 4px;
		text-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
		transform: scale(1, 1.05);
	}

	.scroll-container {
		flex: 1;
		width: 100%;
		background: #050505dc;
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
</style>
