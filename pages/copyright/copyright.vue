<template>
	<view class="container" @touchstart="touchStart" @touchend="touchEnd">
		<image class="bg-image" src="/static/images/思维训练.jpg" mode="aspectFill"></image>
		<view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="nav-bar">
				<view class="back-btn" @click="goBack">
					<text class="iconfont icon-home"></text>
				</view>
				<view class="nav-content">
					<text class="nav-title">多元智能思维 <text class="version-text">1.0.0</text></text>
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="info-section no-border">
				<!-- <image class="company-logo" src="/static/images/伯乐园商标.png" mode="aspectFit"></image> -->
				<text class="section-title">链接生涯教育科技有限公司伯乐学院 出品</text>
				<view class="contact-row">
					<!-- <text class="contact-item">微信：xuezhenscript</text> -->
				</view>
			</view>
			
			<view class="copyright-text">
				<text>© 2025 LinkCareer. All Rights Reserved</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: 0,
			touchStartX: 0
		}
	},
	onLoad() {
		const sysInfo = uni.getSystemInfoSync();
		this.statusBarHeight = sysInfo.statusBarHeight;
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		handleImageError(e) {
			console.error('Image load error:', e);
			uni.showToast({
				title: '图片加载失败',
				icon: 'none'
			});
		},
		handleImageLoad() {
			console.log('Image loaded successfully');
		},
		touchStart(e) {
			this.touchStartX = e.touches[0].clientX;
		},
		touchEnd(e) {
			const touchEndX = e.changedTouches[0].clientX;
			const moveDistance = touchEndX - this.touchStartX;
			
			// 如果向右滑动超过50像素，则返回上一页
			if (moveDistance > 50) {
				this.goBack();
			}
		}
	}
}
</script>

<style>
@font-face {
	font-family: "iconfont";
	src: url('data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABqQAAAKXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACCcAp4gQcBNgIkAwgLBgAEIAWEZwc2G7QFyB6SJAUECgAQBNkPD7Z7f0iCJNWrR4gQhUThUCxULBYj4uG/9ev9mZn7RZNokSSaRBKNRIJEiJBIEBohQWg0XqK5vwKtgYHhKhx4UZwWGmh8kJwc6qjqpXoVhbpxuwRwgDzA+vN5+0NPk0wSQgPxf46ZLj0B+YHOMUcZ2hjvDeiNAQU6x6AoEiuQxA1jF7zAxxCgkU8Rod2ZvUcoZMxUgG5drg6FwqJQyMyVQrFiYQ4zVarSVOoC4EP4fvyHhUJBUmVm7uXOLQ1s/EZ/M+tGRQQB4RQQYBmQiJuVpgOKILpFo0U+qhYDX1XD36wqigX7VXvWBrCPVWR+PFUNkEMqsDvLy0DbhavqfDtV3b+8d/vl/cP1+9Hc3aPt+6ebL0+jfo8vbtwzp5LxkZGvXPtv377/9u3Xl3u/f/z8NjXc7Grg+s2+gcN7J2xvhZ2XAU4XAQD/zzO3AC75v0w7APDjnxgAeNWPvwA+VvyKP5h1qWJmXSxQKGWRiVWmQqWadVCoNYNG1fK7a7XiESQyAhZ8EQh6+ULS2Q9KvfyRif2HSjP8oVAfJTTaE+nKWq0EcsgRbIH+QBzkOM0tL5K9oXyeknJfkXlBEsYjquKCG3JGPGafscSJQo5jA16Cc6jrHFjKC1TrNSg3VxJ9nFJvKYuD3EGOgFqA9gHCgjgcLS88n98bJC9XScruNyTGE0TCjIdocbyCVZpVxXh9njKJRkTi4WgG2AJyHNJxHGCRj1CKqj4NSdNWknipR0l6K4X1+WXGZ24ANPI5ZYgUOUpUUaPVrKO8Zp1mjpzJEgAAAAA=') format('woff2');
}

.container {
	height: 100vh;
	width: 100%;
	position: relative;
	background-color: #000000;
	overflow: hidden;
}

.bg-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 0;
	object-fit: cover;
}

.header {
	position: relative;
	z-index: 1;
	background: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.nav-bar {
	height: 88rpx;
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
}

.nav-logo {
	width: 80rpx;
	height: 80rpx;
	filter: drop-shadow(0 0 5rpx rgba(49, 73, 50, 0.3));
}

.back-btn {
	position: absolute;
	left: 30rpx;
	top: 15rpx;
	height: 15rpx;
	width: 22rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 15rpx;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: rgba(128, 128, 128, 0.7);
}

.icon-home:before {
	content: "\e600";
}

.nav-title {
	font-size: 17rpx;
	font-weight: 600;
	color: #000000;
	text-shadow: none;
}

.nav-title .version-text {
	font-size: 9rpx;
	font-weight: normal;
	color: #000000;
}

.content {
	position: absolute;
	bottom: 0rpx;
	z-index: 1;
	padding: 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: transparent;
	width: 100%;
	justify-content: flex-end;
	transform: translateX(-20rpx);
}

.logo {
	width: 160rpx;
	height: 160rpx;
	margin-bottom: 30rpx;
	filter: drop-shadow(0 0 10rpx rgba(76, 175, 80, 0.3));
}

.app-name {
	font-size: 20rpx;
	font-weight: 600;
	color: #E0E0E0;
	margin-bottom: 4rpx;
	text-shadow: 0 0 5rpx rgba(9, 143, 242, 0.3);
}

.version {
	font-size: 14rpx;
	color: #E0E0E0;
	margin-bottom: 15rpx;
}

.info-section {
	width: calc(100% - 100rpx);
	margin: 0 50rpx 10rpx 50rpx;
	background: rgba(255, 255, 255, 0.05);
	padding: 12rpx;
	border-radius: 10rpx;
	border: 1rpx solid rgba(255, 255, 255, 0.2);
}

.section-title {
	font-size: 26rpx;
	color: rgba(0,0,0,0.15);
	text-shadow: 0 1px 0 rgba(255,255,255,0.5),
				 0 -1px 0 rgba(0,0,0,0.3);
	font-weight: 600;
	letter-spacing: 3rpx;
	text-align: center;
	margin-bottom: 20rpx;
	background: none;
	-webkit-text-fill-color: initial;
	position: relative;
	padding: 2rpx 0;
}

.section-title::before {
	content: "链接生涯教育科技有限公司伯乐学院 出品";
	position: absolute;
	left: 0;
	top: 1px;
	right: 0;
	color: rgba(0,0,0,0.3);
	z-index: -1;
}

.description {
	font-size: 14rpx;
	color: #E0E0E0;
	line-height: 1.6;
	display: block;
}

.contact-item {
	font-size: 14rpx;
	color: #000000 !important;
	line-height: 1.8;
	text-align: center;
}

.copyright-text {
	position: fixed;
	bottom: 2rpx;
	right: 100px;
	text-align: right;
	width: auto;
}

.copyright-text text {
	font-size: 12rpx;
	color: rgba(117, 117, 117, 0.5);
	display: block;
	line-height: 1.6;
	text-align: right;
}

.info-section.no-border {
	background: none;
	border: none;
	text-align: center;
	margin-bottom: 50rpx;
}

.info-section.no-border .section-title,
.info-section.no-border .description {
	text-align: center;
	width: 100%;
}

.nav-content {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1250rpx;
	transform: translateX(-20rpx);
}

.nav-title {
	font-size: 17rpx;
	font-weight: 600;
	color: #000000;
	text-shadow: 0 0 5rpx rgba(9, 143, 242, 0.3);
}

.nav-title .version-text {
	font-size: 9rpx;
	font-weight: normal;
}

.contact-row {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50rpx;
	width: 100%;
	flex-wrap: nowrap;
}

.contact-item {
	font-size: 14rpx;
	color: #000000 !important;
	line-height: 1.8;
	text-align: center;
	white-space: nowrap;
	flex: 0 0 auto;
}

.training-img {
	width: 250rpx;
	height: 150rpx;
	margin: 30rpx 0;
	margin-top: -10rpx;
}

.logo-container {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10rpx;
}

.company-logo {
	width: 32rpx;
	height: 32rpx;
	object-fit: contain;
	vertical-align: middle;
	margin-right: 10rpx;
	transform: translate(7rpx, -8rpx);
}
</style> 