<template>
	<view class="container">
		<swiper class="carousel" circular autoplay interval="5000" duration="500">
			<swiper-item>
				<view @click="openWebView('https://jiaoderenshi.netlify.app')">
					<image src="/static/images/角的认识.jpg" mode="widthFix" class="slide-image"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view @click="openWebView('https://sanjiaoxingderenshi.netlify.app')">
					<image src="/static/images/三角形的认识.jpg" mode="widthFix" class="slide-image"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view @click="openWebView('https://dianxiansiwei.netlify.app')">
					<image src="/static/images/点线思维.jpg" mode="widthFix" class="slide-image"></image>
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
			}
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
	.container {
		position: relative;
		min-height: 100vh;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		padding-bottom: 60px;
	}

	.carousel {
		width: 100%;
		height: 400rpx;
		margin: 20rpx 0;
	}

	.slide-image {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
		transition: transform 0.3s;
	}

	.copyright {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: center;
		padding: 30rpx 0;
		color: #ffffff;
		font-size: 28rpx;
		background: rgba(9, 10, 10, 0.98);
		backdrop-filter: blur(10px);
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}
</style>
