<template>
	<view class="container">
		<view class="top-area" :style="{ paddingTop: statusBarHeight + 'px' }">
			<image class="status-bar-bg" src="/static/images/状态栏.jpg" mode="aspectFill"></image>
			<view class="header">
				<view class="title-container" @click="navigateToCopyright">
					<image class="logo" src="/static/images/伯乐园商标.png" mode="heightFit"></image>
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
						image: '/static/images/角的认识.jpg',
						title: '角的认识',
						info: '通过互动方式学习角的基本概念和性质',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://minisanjiaoxingderenshi.netlify.app',
						image: '/static/images/三角形的认识.jpg',
						title: '三角形的认识',
						info: '探索三角形的特性和分类',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://minidianxiansiwei.netlify.app',
						image: '/static/images/点线思维.jpg',
						title: '点线思维',
						info: '学习点和线的基本概念',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://minisibianxingderenshi.netlify.app',
						image: '/static/images/四边形的认识.jpg',
						title: '四边形的认识',
						info: '了解各种四边形的特征',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://minixianjiaomiansiwei.netlify.app',
						image: '/static/images/线角面思维.jpg',
						title: '线角面思维',
						info: '深入理解几何中的线、角、面概念',
						favorite: false,
						showInfo: false
					},
					{
						url: 'https://dengshi.netlify.app',
						image: '/static/images/线角面思维.jpg',
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
			this.statusBarHeight = sysInfo.statusBarHeight + 10;
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
		background: #000000;
		height: 100%;
		overflow: hidden;
		position: fixed;
		width: 100%;
	}
	
	.container {
		position: fixed;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: #000000;
		overflow: hidden;
		touch-action: none;
	}

	.top-area {
		background: transparent;
		position: relative;
		z-index: 100;
		height: 100rpx;
		overflow: visible;
	}

	.status-bar-bg {
		position: fixed;
		top: 0rpx;
		left: 0;
		width: 100%;
		height: 210rpx;
		z-index: 99;
		/* transform: scale(1, 0.55); */
		/* transform-origin: center; */
	}

	.header {
		width: 100%;
		height: 66rpx;
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		background: transparent;
		position: relative;
		z-index: 101;
	}

	.title-container {
		display: flex;
		align-items: center;
		padding: 8rpx 34rpx 8rpx 24rpx;
		border-radius: 50rpx;
		max-width: fit-content;
		cursor: pointer;
	}

	.logo {
		height: 80rpx;
		width: 80rpx;
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
		-webkit-overflow-scrolling: none;
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
		padding: 20rpx 0 0 0;
	}

	.list-item {
		margin-bottom: 20rpx;
		position: relative;
		border-bottom: 1px solid #333333;
		padding-bottom: 20rpx;
	}

	.list-item:last-child {
		border-bottom: none;
	}

	.item-content {
		display: flex;
		align-items: center;
		background: #000000;
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
		color: #ffffff;
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
