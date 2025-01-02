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
						url: 'https://mobilesanjiaoxingderenshi.netlify.app',
						image: '/static/images/三角形的认识.jpg'
					},
					{
						url: 'https://mdianxiansiwei.netlify.app',
						image: '/static/images/点线思维.jpg'
					},
					{
						url: 'https://mobilesibianxingderenshi.netlify.app',
						image: '/static/images/四边形的认识.jpg'
					},
					{
						url: 'https://mobilexianjiaomiansiwei.netlify.app',
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
		height: 66rpx;
		display: flex;
		align-items: flex-end;
		padding: 0;
		background: #FFFFFF;
	}

	.title-container {
		display: flex;
		align-items: center;
		background: linear-gradient(135deg, #FF2442, #FF1E6E);
		padding: 12rpx 20rpx 12rpx 8rpx;
		position: relative;
		width: fit-content;
		border-radius: 0 32rpx 32rpx 0;
	}

	.title-container::after {
		content: '';
		position: absolute;
		bottom: -20rpx;
		left: 0;
		width: 100%;
		height: 20rpx;
		background: linear-gradient(135deg, #FF2442, #FF1E6E);
	}

	.logo {
		height: 40rpx;
		width: 40rpx;
		margin-right: 8rpx;
	}

	.title {
		font-size: 32rpx;
		font-weight: 500;
		color: #FFFFFF;
		font-family: -apple-system-font, "PingFang SC", "Microsoft YaHei", sans-serif;
		letter-spacing: 2px;
		text-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
		transform: scale(1, 1.05);
	}

	.scroll-container {
		flex: 1;
		width: 100%;
		background: #050505dc;
		overflow: hidden;
		position: relative;
		z-index: 0;
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
