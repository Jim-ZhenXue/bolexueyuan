<template>
	<view class="container">
		<view class="header" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="nav-bar">
				<view class="back-btn" @click="goBack">
					<text class="back-icon">〈</text>
				</view>
			</view>
		</view>
		
		<view class="content">
			<image class="logo" src="/static/images/伯乐园商标.png" mode="heightFit"></image>
			<text class="app-name">多元智能思维</text>
			<text class="version">Version 1.0.0</text>
			
			<view class="info-section">
				<text class="section-title">简介</text>
				<text class="description">本产品由链接生涯教育科技有限公司伯乐学院推出，致力于提供优质的思维训练。我们运用现代科技手段，让知识的吸收更加高效</text>
			</view>
			
			<view class="info-section">
				<text class="section-title">联系我们</text>
				<text class="contact-item">微信：xuezhenscript</text>
				<text class="contact-item">地址：上海市杨浦区丰达商务广场8号楼810室</text>
			</view>
			
			<view class="copyright-text">
				<text>© 2024 LinkCareer. All Rights Reserved</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: 0
		}
	},
	onLoad() {
		const sysInfo = uni.getSystemInfoSync();
		this.statusBarHeight = sysInfo.statusBarHeight;
	},
	methods: {
		goBack() {
			uni.navigateBack();
		}
	}
}
</script>

<style>
@font-face {
	font-family: "iconfont";
	src: url('data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAAKcAAsAAAAABlAAAAJPAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACCcApcdgE2AiQDCAsGAAQgBYRnBzYbpQXIHpIkBQQKEABBBNk/H7t7X0iCJNWrR4gQhUThUCxULBYj4uG/9ev9mZn7RZNokSSaRBKNRIJEiJBIEBohQWg0XqK5vwKtgYHhKhx4UZwWGmh8kJwc6qjqpXoVhbpxuwRwgDzA+vN5+0NPk0wSQgPxf46ZLj0B+YHOMUcZ2hjvDeiNAQU6x6AoEiuQxA1jF7zAxxCgkU8Rod2ZvUcoZMxUgG5drg6FwqJQyMyVQrFiYQ4zVarSVOoC4EP4fvyHhUJBUmVm7uXOLQ1s/EZ/M+tGRQQB4RQQYBmQiJuVpgOKILpFo0U+qhYDX1XD36wqigX7VXvWBrCPVWR+PFUNkEMqsDvLy0DbhavqfDtV3b+8d/vl/cP1+9Hc3aPt+6ebL0+jfo8vbtwzp5LxkZGvXPtv377/9u3Xl3u/f/z8NjXc7Grg+s2+gcN7J2xvhZ2XAU4XAQD/zzO3AC75v0w7APDjnxgAeNWPvwA+VvyKP5h1qWJmXSxQKGWRiVWmQqWadVCoNYNG1fK7a7XiESQyAhZ8EQh6+ULS2Q9KvfyRif2HSjP8oVAfJTTaE+nKWq0EcsgRbIH+QBzkOM0tL5K9oXyeknJfkXlBEsYjquKCG3JGPGafscSJQo5jA16Cc6jrHFjKC1TrNSg3VxJ9nFJvKYuD3EGOgFqA9gHCgjgcLS88n98bJC9XScruNyTGE0TCjIdocbyCVZpVxXh9njKJRkTi4WgG2AJyHNJxHGCRj1CKqj4NSdNWknipR0l6K4X1+WXGZ24ANPI5ZYgUOUpUUaPVrKO8Zp1mjpzJEgAAAAA=') format('woff2');
}

.container {
	min-height: 100vh;
	background-color: #000000;
}

.header {
	background: #000000;
}

.nav-bar {
	height: 88rpx;
	display: flex;
	align-items: center;
	position: relative;
}

.back-btn {
	position: absolute;
	left: 0;
	height: 88rpx;
	width: 88rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.back-icon {
	font-size: 38rpx;
	color: #FFFFFF;
	font-weight: normal;
	transform: scale(1.3, 1);
}

.title {
	width: 100%;
	text-align: center;
	font-size: 36rpx;
	font-weight: 600;
	color: #ffffff;
	background: linear-gradient(45deg, #FFFFFF, #2196F3);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.content {
	padding: 60rpx 40rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #000000;
}

.logo {
	width: 160rpx;
	height: 160rpx;
	margin-bottom: 30rpx;
	filter: drop-shadow(0 0 10rpx rgba(76, 175, 80, 0.3));
}

.app-name {
	font-size: 40rpx;
	font-weight: 600;
	color: #E0E0E0;
	margin-bottom: 16rpx;
	text-shadow: 0 0 10rpx rgba(9, 143, 242, 0.3);
}

.version {
	font-size: 28rpx;
	color: #E0E0E0;
	margin-bottom: 60rpx;
}

.info-section {
	width: 100%;
	margin-bottom: 40rpx;
	background: rgba(255, 255, 255, 0.05);
	padding: 30rpx;
	border-radius: 20rpx;
	border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-title {
	font-size: 32rpx;
	font-weight: 600;
	color: #E0E0E0;
	margin-bottom: 20rpx;
	display: block;
}

.description {
	font-size: 28rpx;
	color: #E0E0E0;
	line-height: 1.6;
	display: block;
}

.contact-item {
	font-size: 28rpx;
	color: #E0E0E0;
	line-height: 1.8;
	display: block;
}

.copyright-text {
	margin-top: 80rpx;
	text-align: center;
}

.copyright-text text {
	font-size: 24rpx;
	color: #757575;
	display: block;
	line-height: 1.6;
}
</style> 