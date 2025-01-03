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
			<view class="item-list">
				<view v-for="(item, index) in items" :key="index" class="list-item">
					<view class="item-content" @click="openWebView(item.url)">
						<image :src="item.image" mode="aspectFit" class="item-image"></image>
						<text class="item-title">{{item.title}}</text>
						<view class="item-actions">
							<text class="heart-icon" @click.stop="toggleFavorite(index)">{{item.favorite ? '♥' : '♡'}}</text>
							<text class="info-icon" @click.stop="showInfo(index)">ⓘ</text>
						</view>
					</view>
					<view v-if="item.showInfo" class="info-tooltip">
						{{item.info}}
					</view>
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
						image: '/static/images/角的认识.png',
						title: '角的认识',
						info: '通过互动方式学习角的基本概念和性质',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://msanjiaoxingderenshi.netlify.app',
						image: '/static/images/三角形的认识.png',
						title: '三角形的认识',
						info: '探索三角形的特性和分类',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://mdianxiansiwei.netlify.app',
						image: '/static/images/点线思维.png',
						title: '点线思维',
						info: '学习点和线的基本概念',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://msibianxingderenshi.netlify.app',
						image: '/static/images/四边形的认识.png',
						title: '四边形的认识',
						info: '了解各种四边形的特征',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://mxianjiaomiansiwei.netlify.app',
						image: '/static/images/线角面思维.png',
						title: '线角面思维',
						info: '深入理解几何中的线、角、面概念',
						favorite: false,
						showInfo: false
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
			},
			toggleFavorite(index) {
				this.items[index].favorite = !this.items[index].favorite;
			},
			showInfo(index) {
				this.items[index].showInfo = !this.items[index].showInfo;
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
		align-items: center;
		padding: 0 20rpx;
		background: #FFFFFF;
	}

	.title-container {
		display: flex;
		align-items: center;
		padding: 8rpx 34rpx 8rpx 24rpx;
		background-color: #ff4444;
		border-radius: 50rpx;
		max-width: fit-content;
		cursor: pointer;
	}

	.logo {
		height: 40rpx;
		width: 40rpx;
		margin-right: 10rpx;
	}

	.title {
		font-size: 32rpx;
		color: #ffffff;
	}

	.scroll-container {
		flex: 1;
		width: 100%;
	}

	.item-list {
		padding: 0;
	}

	.list-item {
		margin-bottom: 20rpx;
		position: relative;
	}

	.item-content {
		display: flex;
		align-items: center;
		background: #f8f8f8;
		padding: 20rpx 20rpx 20rpx 0;
		border-radius: 0 12rpx 12rpx 0;
	}

	.item-image {
		width: 160rpx;
		height: 120rpx;
		border-radius: 0;
		margin-right: 20rpx;
	}

	.item-title {
		flex: 1;
		font-size: 32rpx;
		color: #333;
		margin-left: 0;
	}

	.item-actions {
		display: flex;
		align-items: center;
		gap: 20rpx;
	}

	.item-content .item-actions .heart-icon {
		font-size: 44rpx;
		color: #ff4d4f;
		transition: color 0.3s ease;
	}

	.item-content .item-actions .info-icon {
		font-size: 40rpx;
		color: #999;
	}

	.info-tooltip {
		position: absolute;
		right: 20rpx;
		top: 100%;
		background: rgba(0, 0, 0, 0.7);
		color: white;
		padding: 10rpx 20rpx;
		border-radius: 8rpx;
		font-size: 24rpx;
		margin-top: 10rpx;
		z-index: 100;
		max-width: 400rpx;
	}
</style>
