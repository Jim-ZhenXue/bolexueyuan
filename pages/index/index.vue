<template>
	<view class="container">
		<image class="background-image" src="/static/images/背景.jpg" mode="aspectFill"></image>
		<view class="header">
			<view class="title-container" @click="navigateToCopyright">
				<image class="logo" src="/static/images/伯乐园商标.png" mode="heightFit"></image>
			</view>
		</view>
		<swiper class="swiper-container" 
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000"
			:duration="300"
			:circular="true" 
			:skip-hidden-item-layout="true"
			previous-margin="150rpx" 
			next-margin="150rpx"
			:display-multiple-items="1"
			@change="handleChange">
			<swiper-item v-for="(item, index) in items.slice(0, 5)" :key="index" 
				:class="['swiper-item', currentIndex === index ? 'swiper-item-active' : '']">
				<view class="swiper-content" @click="openWebView(item.url)">
					<image :src="item.image" mode="aspectFit" class="swiper-image"></image>
					<view class="swiper-title">
						<text>{{item.title}}</text>
						<text class="info-icon" @click.stop="showInfo(index)">ⓘ</text>
						<text class="heart-icon" @click.stop="toggleFavorite(index)">{{item.favorite ? '♥' : '♡'}}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
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
						url: 'https://sanjiaoxingderenshi.netlify.app',
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
			},
			
			handleChange(e) {
				this.currentIndex = e.detail.current;
			}
		}
	}
</script>

<style>
	page {
		background: #000000;
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: fixed;
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

	.background-image {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
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
		margin-top: 10rpx;
	}

	.title {
		font-size: 32rpx;
		color: #ffffff;
	}

	.swiper-container {
		flex: 1;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	
	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		will-change: transform;
		transform-style: preserve-3d;
	}
	
	.swiper-content {
		width: 100%;
		height: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: transparent;
		border-radius: 20rpx;
		padding: 20rpx;
		position: relative;
		will-change: transform;
		transform-style: preserve-3d;
	}
	
	.swiper-image {
		width: 100%;
		height: 70%;
		border-radius: 12rpx;
		will-change: transform;
		backface-visibility: hidden;
	}
	
	.swiper-title {
		color: #ffffff;
		font-size: 18rpx;
		margin-top: 20rpx;
		text-align: center;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10rpx;
	}
	
	.heart-icon, .info-icon {
		color: #ffffff;
		font-size: 18rpx;
		padding: 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	/* 非当前项的样式 */
	.swiper-item:not(.swiper-item-active) .swiper-content {
		transform: scale(0.8);
		opacity: 0.6;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.swiper-item:not(.swiper-item-active) .swiper-image {
		filter: brightness(0.7);
		transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* 当前项的样式 */
	.swiper-item-active .swiper-content {
		transform: scale(1);
		opacity: 1;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.swiper-item-active .swiper-image {
		filter: brightness(1);
		transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
