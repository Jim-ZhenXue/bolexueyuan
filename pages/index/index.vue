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
						<view class="item-left">
							<image :src="item.image" mode="aspectFit" class="item-image"></image>
							<text class="item-title">{{item.title}}</text>
						</view>
						<view class="item-actions">
							<text class="heart-icon" @click.stop="toggleFavorite(index)">{{item.favorite ? '♥' : '♡'}}</text>
							<text class="info-icon" @click.stop="showInfo(index)">ⓘ</text>
						</view>
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
				const item = this.items[index];
				let pagePath = '';
				
				switch(item.title) {
					case '角的认识':
						pagePath = '/pages/jiaoderenshi/jiaoderenshi';
						break;
					case '三角形的认识':
						pagePath = '/pages/sanjiaoxingderenshi/sanjiaoxingderenshi';
						break;
					case '点线思维':
						pagePath = '/pages/dianxiansiwei/dianxiansiwei';
						break;
					case '四边形的认识':
						pagePath = '/pages/sibianxingderenshi/sibianxingderenshi';
						break;
					case '线角面思维':
						pagePath = '/pages/xianjiaomiansiwei/xianjiaomiansiwei';
						break;
				}
				
				uni.navigateTo({
					url: pagePath
				});
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
		overflow-y: scroll;
	}

	.scroll-container::-webkit-scrollbar {
		width: 8rpx;
		background-color: #f5f5f5;
	}

	.scroll-container::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 4rpx;
	}

	.scroll-container::-webkit-scrollbar-track {
		background-color: #f5f5f5;
		border-radius: 4rpx;
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
		padding: 20rpx;
		border-radius: 12rpx;
		margin: 0 20rpx;
		position: relative;
		width: auto;
		box-sizing: border-box;
	}

	.item-left {
		display: flex;
		align-items: center;
		flex: 1;
		min-width: 0;
	}

	.item-image {
		width: 320rpx;
		height: 240rpx;
		border-radius: 8rpx;
		margin-right: 40rpx;
		flex-shrink: 0;
	}

	.item-title {
		font-size: 32rpx;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		flex: 1;
	}

	.item-actions {
		display: flex;
		align-items: center;
		gap: 20rpx;
		margin-left: 20rpx;
		flex-shrink: 0;
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
