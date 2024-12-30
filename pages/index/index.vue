<template>
	<view class="container">
		<swiper class="carousel" 
			circular 
			autoplay 
			interval="5000" 
			duration="500"
			:previous-margin="'150rpx'"
			:next-margin="'150rpx'"
			@change="onSwiperChange">
			<swiper-item v-for="(item, index) in slides" :key="index">
				<view @click="openWebView(item.url)" class="slide-container" :class="{ active: current === index }">
					<image :src="item.image" mode="aspectFit" class="slide-image"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="copyright">
			© 2024 LinkCareer. All rights reserved
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				slides: [
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
		methods: {
			openWebView(url) {
				uni.navigateTo({
					url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
				})
			},
			onSwiperChange(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style>
	.container {
		position: relative;
		min-height: 100vh;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		padding-bottom: 15px;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.carousel {
		width: 100%;
		height: 80vh;
		margin: 0;
	}

	.slide-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.3s ease;
		transform: scale(0.85);
		opacity: 0.6;
	}

	.slide-container.active {
		transform: scale(1);
		opacity: 1;
	}

	.slide-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 20rpx;
		transition: transform 0.3s;
	}

	.copyright {
		position: fixed;
		bottom: 0;
		right: 20rpx;
		text-align: right;
		padding: 2rpx 10rpx;
		color: rgba(0, 0, 0, 0.5);
		font-size: 8rpx;
		height: 15px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		min-width: 120rpx;
	}
</style>
