<template>
	<view class="container">
		<view class="top-area" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="header">
				<image class="logo" src="/static/images/伯乐园商标.png" mode="heightFit" @click="navigateToCopyright"></image>
				<text class="title" @click="navigateToCopyright">多元思维</text>
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
		background: #FFFFFF;
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
